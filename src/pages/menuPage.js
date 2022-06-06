import "../styles/menuPage.css";
import Icon from "../assets/Icon.png";
import decorateCorner from "../assets/decorateCorner.png";
import botSVG from "../assets/bot.svg";
import rankSVG from "../assets/rank.svg";
import historySVG from "../assets/history.svg";
import profileSVG from "../assets/profile.svg";
import shoppingCartSVG from "../assets/shoppingCart1.svg";
import infoSVG from "../assets/info.svg";
import cardsSVG from "../assets/cards.svg";
import logo2 from "../assets/logo2.png";
import video from "../assets/rotate1.mp4";
import "../styles/generalcss.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissions, fetchUserData } from "../fetchAPI/fetchAPI";
import { fetchData } from "../redux/data/dataActions";
import TutorialDialog from "../components/tutorial";
import ClipLoader from "react-spinners/ClipLoader";

function Menu() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [missions, setMissions] = useState([]);
    const [userData, setUserData] = useState([{}]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    console.log("data", data);

    useEffect(async () => {
        setLoading(true);
        setMissions(await fetchMissions());
        setUserData(await fetchUserData(blockchain.account));
        // dispatch(fetchData(blockchain.account));
        checkData();
    }, []);

    useEffect(() => {
        if (blockchain.account != "" && blockchain.rpsToken != null) {
            dispatch(fetchData(blockchain.account));
        }
    }, [blockchain.rpsToken]);

    const checkData = () => {
        if (missions != undefined && userData != undefined) {
            setLoading(false);
        }
    };

    const handleClick = () => {
        navigate("/developing");
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
            <div className="App ">
                <div className="layout3 slide-in-elliptic-top-fwd">
                    <img src={Icon} alt="Icon" className="logoMain" />
                    <div className="missionBox">
                        <h1 className="text">Missions:</h1>
                        {missions.map((mission, index) => (
                            <h1 key={index} className="text">
                                {mission.missionName} ({userData[0].matchInDay}/
                                {mission.numMatches}) -Reward {mission.reward}{" "}
                                RPS
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
                            <li className="container" onClick={handleClick}>
                                <img
                                    className="playzoneContainer"
                                    src={rankSVG}
                                    alt="rank"
                                ></img>
                                <div className="playzoneText">Play ranked</div>
                            </li>
                            <li className="container" onClick={handleClick}>
                                <img
                                    className="playzoneContainer"
                                    src={historySVG}
                                    alt="history"
                                ></img>
                                <div className="playzoneText">Global rank</div>
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
                            onClick={handleClick}
                        ></img>
                        <img
                            className="smallContainer"
                            src={cardsSVG}
                            alt="cards"
                            onClick={handleClick}
                        ></img>
                        <img
                            className="smallContainer"
                            src={profileSVG}
                            alt="profile"
                            onClick={handleClick}
                        ></img>
                        <img
                            className="smallContainer"
                            src={infoSVG}
                            alt="info"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(1);
                                setButtonPopup(true);
                            }}
                        ></img>
                    </ul>
                    <img src={logo2} className="menuLogo" alt="logo" />

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
                <TutorialDialog
                    trigger={buttonPopup}
                    setTrigger={setButtonPopup}
                >
                    Testing
                </TutorialDialog>
            </div>
        </div>
    );
}
export default Menu;
