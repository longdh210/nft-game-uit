import { useEffect, useState } from "react";
import "../styles/mainPage.css";
import "../styles/generalcss.css";
import decorateCorner from "../assets/decorateCorner.png";
import logo2 from "../assets/logo2.png";
import Icon from "../assets/Icon.png";
import CardBackside from "../assets/CardBackside4.png";
import TempPcard from "../assets/TempPcard.png";
import TempRcard from "../assets/TempRcard.png";
import TempScard from "../assets/TempScard.png";
import { useNavigate } from "react-router-dom";
import { connect, connectWallet } from "../redux/blockchain/blockchainActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/data/dataActions";
import Dialog from "../components/dialog";
import { fetchPost, fetchCheck, fetchUpdate } from "../fetchAPI/fetchAPI";
import ClipLoader from "react-spinners/ClipLoader";
import video from "../assets/rotate1.mp4";
import metamask from "../assets/metamask.gif";
import metamask2 from "../assets/metamask2.gif";
import polygon from "../assets/poly.webp";

function Login() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const navigate = useNavigate();

    let [loading, setLoading] = useState(false);

    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [buttonPopup3, setButtonPopup3] = useState(false);

    const playPressed = async (_account) => {
        if (!window.ethereum) {
            setButtonPopup(true);
            console.log("Install metamask");
        } else if (_account == undefined || blockchain.errorMsg != "") {
            setButtonPopup3(true);
        } else if (_account == undefined) {
            setButtonPopup2(true);
        } else {
            setLoading(!loading);
            console.log("account:", _account);
            if (_account == null) {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                _account = accounts[0];
            } else if ((await fetchCheck(_account)) == 1) {
                setLoading(!loading);
                navigate("/menu");
            } else if (_account != null && (await fetchCheck(_account)) == 0) {
                mintNFT(_account);
            } else if (_account == null) {
            }
        }
    };

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
                console.log("receipt:", receipt);
                fetchPost(_account);
                setLoading(!loading);
                navigate("/menu");
                dispatch(fetchData(blockchain.account));
            });
    };

    useEffect(() => {
        if (
            blockchain.account != "" &&
            blockchain.rockPaperScissorToken != null
        ) {
            dispatch(fetchData(blockchain.account));
        }
    }, [blockchain.rockPaperScissorToken]);

    useEffect(() => {
        setLoading(true);
        dispatch(connect);
        checkFetchAddress();
    }, [blockchain.account == null]);

    useEffect(() => {
        setLoading(true);
        dispatch(connectWallet());
        dispatch(connect());
        checkFetchAddress();
    }, []);

    const checkFetchAddress = () => {
        if (blockchain.account != null) {
            setLoading(false);
        } else {
            dispatch(connect());
            setLoading(false);
        }
    };

    if (loading == true)
        return (
            <div className="ParentCircleLoader">
                <ClipLoader loading={loading} size={150} color={"#FFFFFF"} />
                <h2 style={{ color: "white" }}>Waiting for transaction</h2>
            </div>
        );

    return (
        <div>
            <video autoPlay loop src={video} muted></video>
            <div className="App">
                <div className="layout1">
                    <img
                        src={decorateCorner}
                        alt="corner"
                        className="corner1"
                    />
                    <div>
                        <img
                            src={logo2}
                            alt="Group 13"
                            className="mainLogo slide-in-left"
                        />
                    </div>
                    <ul className="cardList slide-in-left">
                        <li className="cardBehind">
                            <img
                                src={CardBackside}
                                alt="CardBackside"
                                className="CardBackside"
                            />
                        </li>
                        <li>
                            <img
                                src={TempScard}
                                alt="TempScard"
                                className="TempScard"
                            />
                        </li>
                        <li>
                            <img
                                src={TempPcard}
                                alt="TempPcard"
                                className="TempPcard"
                            />
                        </li>
                        <li>
                            <img
                                src={TempRcard}
                                alt="TempRcard"
                                className="TempRcard"
                            />
                        </li>
                    </ul>
                </div>
                <div className="layout2">
                    <img src={Icon} alt="Icon" className="logo slide-in-left" />
                    <h1 className="header1 slide-in-left">
                        NFT Rock Paper Scisscor
                    </h1>
                    <h1
                        className="header2 slide-in-left"
                        onClick={
                            (e) => {
                                e.preventDefault();
                                playPressed(blockchain.account);
                            }
                            // playPressed
                        }
                    >
                        Play Now
                    </h1>
                    <img
                        src={decorateCorner}
                        alt="corner"
                        className="corner2"
                    />
                </div>
                <Dialog trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <img
                        src={metamask}
                        alt="Group 13"
                        className="metamaskLogo "
                    />
                    <h3 className="titleText" style={{ color: "#429136" }}>
                        Metamask is not install{" "}
                    </h3>

                    <p className="contentText">
                        Please install metamask at:{" "}
                        <a className="link" href="https://metamask.io/">
                            https://metamask.io/
                        </a>
                    </p>
                </Dialog>
                <Dialog trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                    <img
                        src={metamask2}
                        alt="Group 13"
                        className="metamaskLogo "
                    />
                    <h3 className="titleText" style={{ color: "#FF5C87" }}>
                        You are not logged in Metamask
                    </h3>

                    <p className="contentText">
                        For more info please look at:{" "}
                        <a className="link" href="https://metamask.io/">
                            https://metamask.io/
                        </a>
                    </p>
                </Dialog>
                <Dialog trigger={buttonPopup3} setTrigger={setButtonPopup3}>
                    <img
                        src={polygon}
                        alt="Group 13"
                        className="metamaskLogo "
                    />
                    <h3 className="titleText" style={{ color: "#FF5C87" }}>
                        Please connect to Mumbai testnet and reload
                    </h3>

                    <p className="contentText">
                        For more info please look at:{" "}
                        <a
                            className="link"
                            href="https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f"
                        >
                            https://medium.com/stakingbits/how-to-connect-polygon-mumbai-testnet-to-metamask-fc3487a3871f
                        </a>
                    </p>
                </Dialog>
            </div>
        </div>
    );
}

export default Login;
