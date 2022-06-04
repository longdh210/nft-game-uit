import { useState, useEffect, useCallback } from "react";
import { game, randomItems } from "./logicGame";
import { TokenRenderer } from "./tokenRenderer";
import { useNavigate } from "react-router-dom";
import { rockItems, paperItems, scissorItems } from "../parts/items.js";
import { fetchUpdate } from "../fetchAPI/fetchAPI";
import { useSelector } from "react-redux";

// Copy array of items
let rockItemsCopyUser = [...rockItems];
let paperItemsCopyUser = [...paperItems];
let scissorItemsCopyUser = [...scissorItems];
let rockItemsCopyComp = [...rockItems];
let paperItemsCopyComp = [...paperItems];
let scissorItemsCopyComp = [...scissorItems];

// Random first item for user
let firstItems = randomItems(
    rockItemsCopyUser,
    paperItemsCopyUser,
    scissorItemsCopyUser
);
console.log("firstItems", firstItems);

let userWinCount = 0;
let compWinCount = 0;
let items = firstItems;

const RandomItems = ({
    countDown,
    onCountDownChange,
    resultToPlayPage,
    userChoice,
    computerChoice,
    resultMatch,
    cardleft,
}) => {
    const blockchain = useSelector((state) => state.blockchain);
    const [userClick, setUserClick] = useState(false);
    const [firstMount, setFirstMount] = useState(true);
    const [showResult, setShowResult] = useState(true);
    const [final, setFinal] = useState(false);
    // let numCard = 12;
    const navigate = useNavigate();

    // Reset countdown from playPage
    const handleCountDownChange10s = useCallback(() => {
        onCountDownChange(10);
    }, [onCountDownChange]);

    const handleCountDownChange5s = useCallback(() => {
        onCountDownChange(5);
    }, [onCountDownChange]);

    useEffect(() => {
        if (firstMount == true) {
            handleCountDownChange5s();
            console.log("run card left 12");
            // cardleft();
        }
        if (countDown == 0 && userClick == false && firstMount == false) {
            autoRandomItem();
            handleCountDownChange5s();
            console.log("run card left -3");
            cardleft();
            resultToPlayPage(showResult);
            // if (final == true) {
            //     alertLog(userWinCount, compWinCount);
            // }
        }
        setFirstMount(false);
    }, [countDown]);

    const alertLog = (userWinCount, compWinCount) => {
        if (userWinCount > compWinCount) {
            alert("User win");
        } else if (compWinCount > userWinCount) {
            alert("Computer win");
        } else {
            alert("Draw");
        }
    };

    const autoRandomItem = async () => {
        const randomItem = items[Math.floor(Math.random() * 3)];
        let result = game(
            randomItem,
            rockItemsCopyComp,
            paperItemsCopyComp,
            scissorItemsCopyComp
        );
        if (result[2] == 1) {
            userWinCount++;
        } else if (result[2] == -1) {
            compWinCount++;
        }
        userChoice(result[0]);
        computerChoice(result[1]);
        resultMatch(result[3]);
        console.log("rock", rockItemsCopyUser);
        // Check current item
        const tempItems = randomItems(
            rockItemsCopyUser,
            paperItemsCopyUser,
            scissorItemsCopyUser
        );
        if (tempItems != 0) {
            // console.log("items", tempItems);
            // setItems(tempItems);
            items = tempItems;
            // console.log("items set", items);
        } else {
            // if (userWinCount > compWinCount) {
            //     alert("User win");
            // } else if (compWinCount > userWinCount) {
            //     alert("Computer win");
            // } else {
            //     alert("Draw");
            // }
            // setFinal(true);
            handleCountDownChange5s();
            resultToPlayPage(showResult);
            console.log("Final:");
            console.log("user", userWinCount);
            console.log("comp", compWinCount);
            // Reset variables
            userWinCount = 0;
            compWinCount = 0;
            rockItemsCopyUser = [...rockItems];
            paperItemsCopyUser = [...paperItems];
            scissorItemsCopyUser = [...scissorItems];
            rockItemsCopyComp = [...rockItems];
            paperItemsCopyComp = [...paperItems];
            scissorItemsCopyComp = [...scissorItems];
            firstItems = randomItems(
                rockItemsCopyUser,
                paperItemsCopyUser,
                scissorItemsCopyUser
            );
            await fetchUpdate(blockchain.account);
            alertLog(userWinCount, compWinCount);
            navigate("/menu");
        }
    };

    const handleClick = (item) => {
        getUserClick(item);
        handleCountDownChange5s();
        resultToPlayPage(showResult);
    };

    const getUserClick = async (item) => {
        let result = game(
            item,
            rockItemsCopyComp,
            paperItemsCopyComp,
            scissorItemsCopyComp
        );
        if (result[2] == 1) {
            userWinCount++;
        } else if (result[2] == -1) {
            compWinCount++;
        }
        userChoice(result[0]);
        computerChoice(result[1]);
        resultMatch(result[3]);
        // Check current item
        const tempItems = randomItems(
            rockItemsCopyUser,
            paperItemsCopyUser,
            scissorItemsCopyUser
        );
        if (tempItems != 0) {
            // setItems(tempItems);
            items = tempItems;
        } else {
            if (userWinCount > compWinCount) {
                alert("User win");
            } else if (compWinCount > userWinCount) {
                alert("Computer win");
            } else {
                alert("Draw");
            }
            // Reset variables
            userWinCount = 0;
            compWinCount = 0;
            rockItemsCopyUser = [...rockItems];
            paperItemsCopyUser = [...paperItems];
            scissorItemsCopyUser = [...scissorItems];
            rockItemsCopyComp = [...rockItems];
            paperItemsCopyComp = [...paperItems];
            scissorItemsCopyComp = [...scissorItems];
            firstItems = randomItems(
                rockItemsCopyUser,
                paperItemsCopyUser,
                scissorItemsCopyUser
            );
            await fetchUpdate(blockchain.account);
            navigate("/menu");
        }
    };

    return items.map((item, index) => (
        <TokenRenderer
            token={item}
            key={index}
            onClick={() => handleClick(item)}
        ></TokenRenderer>
    ));
};

export default RandomItems;
