import "../styles/playPage.css";
import CardBackSide from "../assets/CardBackside4.png";
import UserAvt from "../assets/user-avt.png";
import TempPcard from "../assets/TempPcard.png";
import TempRcard from "../assets/TempRcard.png";
import TempScard from "../assets/TempScard.png";
import SupportIcon from "../assets/supportIcon.png";
import video from "../assets/rotate1.mp4";
import "../styles/generalcss.css";
import TutorialDialog from "../components/tutorial";
import { VerusCard } from "../components/verusCard";
import CountDown from "../components/countDown";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import "../styles/playPage.css";

import RandomItems from "../components/randomItems";

function Play() {
    const blockchain = useSelector((state) => state.blockchain);
    const [buttonPopup, setButtonPopup] = useState(false);
    // const [numChoice, setNumChoice] = useState(0);
    const [countDown, setCountDown] = useState(5);
    const [cardLeft, setCardLeft] = useState(12);
    const [render, setRender] = useState(false);
    const [showResult, setShowResult] = useState("");
    const [userChoice, setUserChoice] = useState({});
    const [computerChoice, setComputerChoice] = useState({});
    const [result, setResult] = useState("");
    const [showRemovedCard, setShowRemovedCard] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCountDown(countDown - 1);
        }, 1000);
        if (countDown == 0) {
            clearTimeout(timerId);
            // setNumChoice(numChoice + 1);
            // setCardLeft(cardLeft - 3);
            // console.log("run");
            // console.log("numChoice", numChoice);
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
    };

    const getCardLeft = () => {
        if (cardLeft > 0) {
            setCardLeft(cardLeft - 3);
            setShowRemovedCard(true);
        }
    };

    return (
        <div>
            <video autoPlay loop src={video} muted></video>
            <div className="App">
                <div className="playPage">
                    <div className="layoutFirst">
                        <div className="cornerCount">Card left: {cardLeft}</div>
                        {!showResult ? (
                            <div className="enemyCardList">
                                <img
                                    className="card"
                                    src={CardBackSide}
                                    alt="Card back side"
                                />
                                <img
                                    className="card"
                                    src={CardBackSide}
                                    alt="Card back side"
                                />
                                <img
                                    className="card"
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
                            <div className="user-hp">HP: 5/5</div>
                        </div>
                    </div>
                    <div className="layoutSecond">
                        <div className="countDownText">
                            {render == false ? (
                                <h1 style={{ fontSize: "50%" }}>
                                    ARE YOU READY ? <br />
                                    {countDown}
                                </h1>
                            ) : !showResult ? (
                                <h1 style={{ fontSize: "50%" }}>
                                    COUNTDOWN:
                                    <br />
                                    {countDown}
                                    <br />
                                    PICK YOUR CARD
                                </h1>
                            ) : (
                                <VerusCard
                                    tokenUser={userChoice}
                                    tokenComputer={computerChoice}
                                    result={result}
                                ></VerusCard>
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
                                {`${blockchain.account.substring(0, 25)}...`}
                            </div>
                            <div className="user-hp">HP: 5/5</div>
                        </div>
                        <div className="userCardList">
                            {render ? (
                                !showResult ? (
                                    <RandomItems
                                        countDown={countDown}
                                        onCountDownChange={setCountDown}
                                        resultToPlayPage={resultToPlayPage}
                                        userChoice={getUserChoice}
                                        computerChoice={getComputerChoice}
                                        resultMatch={getResultMatch}
                                        cardleft={getCardLeft}
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
                                    className="card"
                                    src={CardBackSide}
                                    alt="Card back side"
                                />
                            ) : (
                                <div className="removeCard">
                                    <span>Removed Card</span>
                                </div>
                            )}
                            <div className="supportIcon">
                                <img
                                    className="icon"
                                    src={SupportIcon}
                                    alt="support icon"
                                    style={{ width: "3.5vw" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        console.log(1);
                                        setButtonPopup(true);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <TutorialDialog
                    trigger={buttonPopup}
                    setTrigger={setButtonPopup}
                >
                    Testing
                </TutorialDialog>
            </div>
            <div className=' enemyCardList swing-in-top-fwd'>
              <img className='enemy-card' src={CardBackSide} alt='Card back side' />
              <img className='enemy-card' src={CardBackSide} alt='Card back side' />
              <img className='enemy-card' src={CardBackSide} alt='Card back side' />
            </div>
            <div className='user-card'>
              <div className='user-info'>
                <img className='avt' src={UserAvt} alt='user-avt' /> Player B
              </div>
              <div className='user-hp'>
                HP: 5/5
              </div>
            </div>
          </div>
          <div className='layoutSecond'>
        <div className="countDownText rotate-scale-up">
        {
          render == false ?
          <h1 style={{ fontSize: "50%" }}>ARE YOU READY ? <br />{countDown}</h1>
          : <h1 style={{ fontSize: "50%" }}>COUNTDOWN:<br />{countDown}<br/>PICK YOUR CARD</h1>
        }
        </div>
    );
}

export default Play;
