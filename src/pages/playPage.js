import "../styles/playPage.css";
import CardBackSide from "../assets/CardBackside4.png";
import UserAvt from "../assets/user-avt.png";
import SupportIcon from "../assets/supportIcon.png";
import video from "../assets/rotate1.mp4";
import "../styles/generalcss.css";
import TutorialDialog from "../components/tutorial";
import { VerusCard } from "../components/verusCard";
import FinalResult from "../components/finalResult";
import CountDown from "../components/countDown";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/playPage.css";
import AlertDialog from "../components/UIPopup";
import RandomItems from "../components/randomItems";
import { useNavigate } from "react-router-dom";

function Play() {
    const blockchain = useSelector((state) => state.blockchain);

    // const [numChoice, setNumChoice] = useState(0);
    const [countDown, setCountDown] = useState(5);
    const [cardLeft, setCardLeft] = useState(12);
    const [render, setRender] = useState(false);
    const [showResult, setShowResult] = useState("");
    const [userChoice, setUserChoice] = useState({});
    const [computerChoice, setComputerChoice] = useState({});
    const [userWinCount, setUserWinCount] = useState(0);
    const [computerWinCount, setComputerWinCount] = useState(0);
    const [result, setResult] = useState("");
    const [showRemovedCard, setShowRemovedCard] = useState(false);
    const [showFinalResult, setShowFinalResult] = useState(false);
    const [userHP, setUserHP] = useState(3);
    const [computerHP, setComputerHP] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCountDown(countDown - 1);
        }, 1000);
        if (countDown == 0) {
            clearTimeout(timerId);
            setRender(true);
            if (showResult == true) {
                setShowResult(false);
            }
        }
        return () => clearTimeout(timerId);
    }, [countDown]);

    const resultToPlayPage = (randomData) => {
        setShowResult(randomData);
        setCountDown(5);
    };

    const getUserChoice = (userChoiceData) => {
        setUserChoice(userChoiceData);
        console.log("getUserChoice", userChoiceData);
    };

    const getComputerChoice = (computerChoiceData) => {
        setComputerChoice(computerChoiceData);
    };

    const getResultMatch = (resultMatchData) => {
        setResult(resultMatchData);
        if (resultMatchData == "You win") {
            setComputerHP(computerHP - 1);
        } else if (resultMatchData == "Bot win") {
            setUserHP(userHP - 1);
        } else if (resultMatchData == "Draw") {
            console.log("Draw");
        }
    };

    const getCardLeft = () => {
        if (cardLeft > 0) {
            setCardLeft(cardLeft - 3);
            setShowRemovedCard(true);
        }
    };

    const getFinalResult = () => {
        setShowFinalResult(true);
    };

    const getUserWinCount = (userWinCountData) => {
        setUserWinCount(userWinCountData);
    };

    const getComputerWinCount = (computerWinCountData) => {
        setComputerWinCount(computerWinCountData);
    };

    return (
        <div>
            <video autoPlay loop src={video} muted></video>
            <div className="App">
                <div className="playPage">
                    <div className="layoutFirst">
                        <div className="cornerCount">Card left: {cardLeft}</div>
                        {showFinalResult ? (
                            <></>
                        ) : !showResult ? (
                            <div className="enemyCardList swing-in-top-fwd">
                                <img
                                    className="enemyCard"
                                    src={CardBackSide}
                                    alt="Card back side"
                                />
                                <img
                                    className="enemyCard"
                                    src={CardBackSide}
                                    alt="Card back side"
                                />
                                <img
                                    className="enemyCard"
                                    src={CardBackSide}
                                    alt="Card back side"
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="user-card">
                            <div className="user-info">
                                <img
                                    className="avt"
                                    src={UserAvt}
                                    alt="user-avt"
                                />{" "}
                                Bot
                            </div>
                            <div className="user-hp">HP: {computerHP}/3</div>
                        </div>
                    </div>
                    <div className="layoutSecond">
                        <div className="countDownText rotate-scale-up">
                            {render == false ? (
                                <h1 style={{ fontSize: "50%" }}>
                                    ARE YOU READY ? <br />
                                    {countDown}
                                </h1>
                            ) : !showResult && showFinalResult == false ? (
                                <h1 style={{ fontSize: "50%" }}>
                                    COUNTDOWN:
                                    <br />
                                    {countDown}
                                    <br />
                                    PICK YOUR CARD
                                </h1>
                            ) : showResult ? (
                                <VerusCard
                                    tokenUser={userChoice}
                                    tokenComputer={computerChoice}
                                    result={result}
                                ></VerusCard>
                            ) : !showResult && showFinalResult ? (
                                <FinalResult
                                    userWinCount={userWinCount}
                                    computerWinCount={computerWinCount}
                                    result={
                                        userWinCount > computerWinCount
                                            ? "You win"
                                            : userWinCount == computerWinCount
                                            ? "Draw"
                                            : "Bot win"
                                    }
                                ></FinalResult>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="layoutThird">
                        <div className="user-card-2">
                            <div className="user-info">
                                <img
                                    className="avt"
                                    src={UserAvt}
                                    alt="user-avt"
                                />
                                {blockchain.account != null
                                    ? `${blockchain.account.substring(
                                          0,
                                          25
                                      )}...`
                                    : "Player"}
                            </div>
                            <div className="user-hp">HP: {userHP}/3</div>
                        </div>
                        <div className="userCardList">
                            {render ? (
                                showFinalResult ? (
                                    <></>
                                ) : !showResult ? (
                                    <RandomItems
                                        countDown={countDown}
                                        onCountDownChange={setCountDown}
                                        resultToPlayPage={resultToPlayPage}
                                        userChoice={getUserChoice}
                                        computerChoice={getComputerChoice}
                                        resultMatch={getResultMatch}
                                        cardleft={getCardLeft}
                                        finalResult={getFinalResult}
                                        getUserWinCount={getUserWinCount}
                                        getComputerWinCount={
                                            getComputerWinCount
                                        }
                                    ></RandomItems>
                                ) : (
                                    <></>
                                )
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="removePlace">
                            {showRemovedCard ? (
                                <img
                                    className="enemyCard"
                                    src={CardBackSide}
                                    alt="Card back side"
                                />
                            ) : (
                                <div className="removeCard">
                                    <span>Removed Card</span>
                                </div>
                            )}
                            <div className="supportIcon">
                                {/* <img
                                    className="icon"
                                    src={SupportIcon}
                                    alt="support icon"
                                    style={{ width: "3.5vw" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        console.log(1);
                                        setButtonPopup(true);
                                    }}
                                /> */}
                                <AlertDialog />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Play;
