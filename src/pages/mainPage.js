import { useEffect, useState } from 'react';
import '../styles/mainPage.css';
import '../styles/generalcss.css';
import decorateCorner from '../assets/decorateCorner.png';
import logo2 from '../assets/logo2.png';
import Icon from '../assets/Icon.png';
import CardBackside from '../assets/CardBackside4.png';
import TempPcard from '../assets/TempPcard.png';
import TempRcard from '../assets/TempRcard.png';
import TempScard from '../assets/TempScard.png';
import { useNavigate } from 'react-router-dom';
import { connect, connectWallet } from '../redux/blockchain/blockchainActions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/data/dataActions'
import RockPaperScissorToken from "../RockPaperScissor.json";
import { tokenaddress } from "../config";
import { ethers } from 'ethers'
import Web3 from "web3";
import Dialog from '../components/dialog';




function Login() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const navigate = useNavigate();
    
    const [buttonPopup,setButtonPopup]=useState(false);


    const playPressed = async (_account) => {
        dispatch(connectWallet());
        dispatch(connect());
        if(!window.ethereum) {
      
            console.log("Install metamask");
           
        } else if(data.numToken != 15){
            console.log("balance mint:", data.numToken);
            mintNFT(_account);
            console.log("mint");
            navigate('/play');
        } else if (data.numToken == 15) {
            console.log("balance:", data.numToken);
            navigate('/play');
        }
    }

    const mintNFT = (_account) => {
        blockchain.rockPaperScissorToken.methods
            .createRandomCard()
            .send({
                from: _account,
                value: blockchain.web3.utils.toWei("0.01", "ether"),
            })
            .once("error", (err) => {
                console.log(err);
            })
            .then((receipt) => {
                console.log(receipt);
                dispatch(fetchData(blockchain.account));
            });
    };

    const checkTokenBalance = async (_account) => {
        await blockchain.rockPaperScissorToken.methods
            .getTokenBalance(_account)
            .call(function(err, res) {
                if(err) {
                    console.log("An error occurred", err);
                    return;
                }
                return res;
            })
    }

    useEffect(() => {
        if(blockchain.account != "" && blockchain.rockPaperScissorToken != null) {
            dispatch(fetchData(blockchain.account));
            console.log("run");
        }
    }, [blockchain.rockPaperScissorToken]);

    useEffect(() => {
        dispatch(connect());
        console.log("run connect");
    }, [])


    

    return (
        <div className="App" >
            <div className="layout1" >
                <img src={decorateCorner} alt="corner" className="corner1" />
                <div>
                    <img src={logo2} alt="Group 13" className="mainLogo" />
                </div>
                <ul className="cardList">
                    <li className="cardBehind">
                        <img src={CardBackside} alt="CardBackside" className="CardBackside" />
                    </li>
                    <li>
                        <img src={TempScard} alt="TempScard" className="TempScard" />
                    </li>
                    <li>
                        <img src={TempPcard} alt="TempPcard" className="TempPcard" />
                    </li>
                    <li>
                        <img src={TempRcard} alt="TempRcard" className="TempRcard" />
                    </li>
                </ul>
            </div>
            <div className="layout2">
                <img src={Icon} alt="Icon" className="logo" />
                <h1 className="header1">NFT Rock Paper Scisscor</h1>
                <h1 className="header2" onClick={
                    (e) => {
                        
                        
                   
                         e.preventDefault();
                        setButtonPopup(true)
                         console.log(1);
                        // playPressed(blockchain.account);
                        // handleContract(blockchain.account);
                    }
                }>Play Now</h1>
                <img src={decorateCorner} alt="corner" className="corner2" />
            </div>
            <Dialog trigger={buttonPopup} setTrigger={setButtonPopup}><h3>My popup</h3><p>hihihahaha</p></Dialog>
          
        </div>
    );
}

export default Login;