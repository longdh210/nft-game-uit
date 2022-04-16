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
import Web3 from "web3";

function Login() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const navigate = useNavigate();

    // const handleContract = async (_account) => {
    //     await dispatch(connectWallet());
    //     await dispatch(connect());
    //     console.log("account", _account);
    //     let web3 = new Web3(window.ethereum);
    //     const rockPaperScissorToken = new web3.eth.Contract(
    //         RockPaperScissorToken.abi,
    //         tokenaddress
    //     );
    //     rockPaperScissorToken.methods
    //         .createRandomCard()
    //         .send({ 
    //             from: "0x80e7e19d5950121304a2a4D265582a05cF2099f3",
    //             value: web3.utils.toWei("0.1", "ether")
    //         })
    // }

    const playPressed = async (_account) => {
        await dispatch(connectWallet());
        await dispatch(connect());
        console.log("blockchain", blockchain);
        if(!window.ethereum) {
            console.log("Install metamask");
        } else {
            await mintNFT(blockchain.account);
            navigate("/menu");
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

    useEffect(() => {
        if(blockchain.account != "" && blockchain.rockPaperScissorToken != null) {
            dispatch(fetchData(blockchain.account));
        }
        dispatch(connect());
    }, []);

    return (
        <div className="App">
            <div className="layout1">
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
                        playPressed(blockchain.account);
                        // handleContract(blockchain.account);
                    }
                }>Play Now</h1>
                <img src={decorateCorner} alt="corner" className="corner2" />
            </div>
        </div>
    );
}

export default Login;