import "../styles/menuPage.css";
import Icon from "../assets/Icon.png";
import decorateCorner from "../assets/decorateCorner.png";
import botSVG from "../assets/bot.svg";
import rankSVG from "../assets/rank.svg";
import historySVG from "../assets/history.svg";
import profileSVG from "../assets/profile.svg";
import shoppingCartSVG from "../assets/shoppingCart1.svg";
import AlertDialog from "../components/UIPopup";
import cardsSVG from "../assets/cards.svg";
import logo2 from "../assets/logo2.png";
import video from "../assets/rotate1.mp4";
import "../styles/generalcss.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissions, fetchUserData } from "../fetchAPI/fetchAPI";
import { fetchData } from "../redux/data/dataActions";
import { connect, connectWallet } from "../redux/blockchain/blockchainActions";
import ClipLoader from "react-spinners/ClipLoader";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

function Menu() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [missions, setMissions] = useState([]);
    const [userData, setUserData] = useState([{ matchInDay: 0 }]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const theme = createTheme({});
    // console.log("data", data);

    const checkBlockchainAccount = (_account) => {
        if (_account == null) {
            setLoading(true);
            dispatch(connectWallet());
            dispatch(connect());
        }
        if (_account != null) {
            setLoading(false);
        }
    };

    useEffect(async () => {
        setLoading(true);
        dispatch(connectWallet());
        dispatch(connect());
        checkBlockchainAccount(blockchain.account);
        setMissions(await fetchMissions());
        if (blockchain.account != null) {
            setUserData(await fetchUserData(blockchain.account));
        } else {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            setUserData(await fetchUserData(accounts[0]));
        }
        checkFetchAddress();
        // dispatch(fetchData(blockchain.account));
        checkData();
    }, []);

    useEffect(() => {
        if (blockchain.account != null && blockchain.rpsToken != null) {
            dispatch(fetchData(blockchain.account));
        }
    }, [blockchain.rpsToken]);

    useEffect(async () => {
        setLoading(true);
        dispatch(connect);
        checkFetchAddress();
    }, [blockchain.account == null]);

    const checkData = () => {
        if (missions != undefined && userData != undefined) {
            setLoading(false);
        }
    };

    const checkFetchAddress = () => {
        if (blockchain.account != null) {
            setLoading(false);
        } else {
            dispatch(connect());
            setLoading(false);
        }
    };

    const navigateDeveloping = () => {
        navigate("/developing");
    };
    const navigateDeck = () => {
        navigate("/deck");
    };
    

    if (loading == true)
        return (
            <div className="ParentCircleLoader">
                <ClipLoader loading={loading} size={150} color={"#FFFFFF"} />
                <h2 style={{ color: "white" }}>Waiting for transaction</h2>
            </div>
        );

    return (
        <ThemeProvider theme={theme}>
            <div>
                <video autoPlay loop src={video} muted></video>
                <div className="App ">
                    <div className="layout3 slide-in-elliptic-top-fwd">
                        <img src={Icon} alt="Icon" className="logoMain" />
                        <div className="missionBox">
                            <h1 className="text">Missions:</h1>
                            {missions.map((mission, index) => (
                                <h1 key={index} className="text">
                                    {mission.missionName} (
                                    {userData[0].matchInDay}/
                                    {mission.numMatches}) -Reward{" "}
                                    {mission.reward} RPS
                                </h1>
                            ))}
                        </div>
                        <div className="playZone">
                            <ul>
                                <li className="container">
                                    <img
                                        className="playzoneContainer"
                                        src={botSVG}
                                        alt="bot"
                                    ></img>
                                    <div
                                        className="playzoneText"
                                        onClick={() => {
                                            navigate("/play");
                                        }}
                                    >
                                        Play with bots
                                    </div>
                                </li>
                                <li className="container" onClick={navigateDeveloping}>
                                    <img
                                        className="playzoneContainer"
                                        src={rankSVG}
                                        alt="rank"
                                    ></img>
                                    <div className="playzoneText">
                                        Play ranked
                                    </div>
                                </li>
                                <li className="container" onClick={navigateDeveloping}>
                                    <img
                                        className="playzoneContainer"
                                        src={historySVG}
                                        alt="history"
                                    ></img>
                                    <div className="playzoneText">
                                        Global rank
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="layout5 slide-in-elliptic-top-fwd">
                        <ul className="container2">
                            <h1 className="text">RPS:{data.balanceTokens}</h1>
                            <img
                                className="smallContainer"
                                src={shoppingCartSVG}
                                alt="shoppingcart"
                                onClick={navigateDeveloping}
                            ></img>
                            <img
                                className="smallContainer"
                                src={cardsSVG}  
                                alt="cards"
                                onClick={navigateDeck}
                            ></img>
                            <img
                                className="smallContainer"
                                src={profileSVG}
                                alt="profile"
                                onClick={navigateDeveloping}
                            ></img>
                            {/* <img
                            className="smallContainer"
                            src={infoSVG}
                            alt="info"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(1);
                                setButtonPopup(true);
                            }}
                        ></img> */}
                            <AlertDialog />
                        </ul>

                        <img src={logo2} className="menuLogo" alt="logo" />
                        <div className="noteText">
                            NOTE: It take a few minute to get reward after
                            finish a misson.
                        </div>
                        <div className="progressBarBox">
                            <div className="word">
                                <div>Current elo :3120</div>
                                <div>Next rank: 3200</div>
                            </div>
                            <div className="progressBarContainer">
                                <div className="progressBarLoad"></div>
                            </div>
                        </div>
                    </div>
                    <div className="wordCorner">
                        Your address: {blockchain.account}
                    </div>
                    <img
                        src={decorateCorner}
                        alt="corner"
                        className="cornerMenuPage"
                    />
                    {/* <TutorialDialog
                    trigger={buttonPopup}
                    setTrigger={setButtonPopup}
                >
                    Testing
                </TutorialDialog>
                 */}
                </div>
            </div>
        </ThemeProvider>
    );
}
export default Menu;
