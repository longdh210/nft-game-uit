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

console.log("Mount");

// Random first item for user
let firstItems = randomItems(
    rockItemsCopyUser,
    paperItemsCopyUser,
    scissorItemsCopyUser
);
let items = firstItems;
let userWinCount = 0;
let compWinCount = 0;
// let items = firstItems;

// console.log("itemsFirstMount", firstItems);
console.log("start");
console.log("rock", rockItemsCopyUser);
console.log("paper", paperItemsCopyUser);
console.log("scissor", scissorItemsCopyUser);

const RandomItems = ({
    countDown,
    onCountDownChange,
    resultToPlayPage,
    userChoice,
    computerChoice,
    resultMatch,
    cardleft,
    finalResult,
    getUserWinCount,
    getComputerWinCount,
}) => {
    const blockchain = useSelector((state) => state.blockchain);
    const [userClick, setUserClick] = useState(false);
    const [firstMount, setFirstMount] = useState(true);
    const [showResult, setShowResult] = useState(true);
    const [locationKeys, setLocationKeys] = useState([]);
    // const [items, setItems] = useState(firstItems);

    useEffect(() => {
        window.onpopstate = () => {
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
            items = firstItems;
            userWinCount = 0;
            compWinCount = 0;
            console.log("you back");
        };
    });
    // let numCard = 12;
    // const navigate = useNavigate();

    // console.log("start");
    // console.log("rock", rockItemsCopyUser);
    // console.log("paper", paperItemsCopyUser);
    // console.log("scissor", scissorItemsCopyUser);
    // console.log("firstItemsInside", firstItems);

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
            // console.log("run card left 12");
            // cardleft();
        }
        if (countDown == 0 && userClick == false && firstMount == false) {
            autoRandomItem();
            handleCountDownChange5s();
            // console.log("run card left -3");
            cardleft();
            resultToPlayPage(showResult);
        }
        setFirstMount(false);
    }, [countDown]);

    const autoRandomItem = async () => {
        console.log("firstItem", firstItems);
        console.log("item", items);
        const randomItem = items[Math.floor(Math.random() * 3)];
        let result = game(
            randomItem,
            rockItemsCopyComp,
            paperItemsCopyComp,
            scissorItemsCopyComp
        );
        console.log("result", result);
        if (result[2] == 1) {
            userWinCount++;
        } else if (result[2] == -1) {
            compWinCount++;
        }
        if (userWinCount == 3 || compWinCount == 3) {
            handleCountDownChange5s();
            resultToPlayPage(showResult);
            console.log("Final:");
            console.log("user", userWinCount);
            console.log("comp", compWinCount);
            getUserWinCount(userWinCount);
            getComputerWinCount(compWinCount);
            // Reset variables
            userWinCount = 0;
            compWinCount = 0;
            rockItemsCopyUser = [...rockItems];
            paperItemsCopyUser = [...paperItems];
            scissorItemsCopyUser = [...scissorItems];
            rockItemsCopyComp = [...rockItems];
            paperItemsCopyComp = [...paperItems];
            scissorItemsCopyComp = [...scissorItems];
            console.log("end");
            console.log("rock", rockItemsCopyUser);
            console.log("paper", paperItemsCopyUser);
            console.log("scissor", scissorItemsCopyUser);
            firstItems = randomItems(
                rockItemsCopyUser,
                paperItemsCopyUser,
                scissorItemsCopyUser
            );
            items = firstItems;
            console.log("itemsEnd", firstItems);
            await fetchUpdate(blockchain.account);
            finalResult();
        } else {
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
                console.log("reset");
                console.log("items", tempItems);
                // setItems(tempItems);
                items = tempItems;
                // console.log("items set", items);
            } else {
                handleCountDownChange5s();
                resultToPlayPage(showResult);
                console.log("Final:");
                console.log("user", userWinCount);
                console.log("comp", compWinCount);
                getUserWinCount(userWinCount);
                getComputerWinCount(compWinCount);
                // Reset variables
                userWinCount = 0;
                compWinCount = 0;
                rockItemsCopyUser = [...rockItems];
                paperItemsCopyUser = [...paperItems];
                scissorItemsCopyUser = [...scissorItems];
                rockItemsCopyComp = [...rockItems];
                paperItemsCopyComp = [...paperItems];
                scissorItemsCopyComp = [...scissorItems];
                console.log("end");
                console.log("rock", rockItemsCopyUser);
                console.log("paper", paperItemsCopyUser);
                console.log("scissor", scissorItemsCopyUser);
                firstItems = randomItems(
                    rockItemsCopyUser,
                    paperItemsCopyUser,
                    scissorItemsCopyUser
                );
                items = firstItems;
                console.log("itemsEnd", firstItems);
                await fetchUpdate(blockchain.account);
                finalResult();
            }
        }
    };

    const handleClick = (item) => {
        getUserClick(item);
        handleCountDownChange5s();
        console.log("run card left -3");
        cardleft();
        resultToPlayPage(showResult);
    };

    const getUserClick = async (item) => {
        let result = game(
            item,
            rockItemsCopyComp,
            paperItemsCopyComp,
            scissorItemsCopyComp
        );
        console.log("result", result);
        if (result[2] == 1) {
            userWinCount++;
        } else if (result[2] == -1) {
            compWinCount++;
        }
        if (userWinCount == 3 || compWinCount == 3) {
            userChoice(result[0]);
            computerChoice(result[1]);
            resultMatch(result[3]);
            console.log("userWinCount", userWinCount);
            console.log("compWinCount", compWinCount);
            handleCountDownChange5s();
            resultToPlayPage(showResult);
            console.log("Final:");
            console.log("user", userWinCount);
            console.log("comp", compWinCount);
            getUserWinCount(userWinCount);
            getComputerWinCount(compWinCount);
            // Reset variables
            userWinCount = 0;
            compWinCount = 0;
            rockItemsCopyUser = [...rockItems];
            paperItemsCopyUser = [...paperItems];
            scissorItemsCopyUser = [...scissorItems];
            rockItemsCopyComp = [...rockItems];
            paperItemsCopyComp = [...paperItems];
            scissorItemsCopyComp = [...scissorItems];
            console.log("end");
            console.log("rock", rockItemsCopyUser);
            console.log("paper", paperItemsCopyUser);
            console.log("scissor", scissorItemsCopyUser);
            firstItems = randomItems(
                rockItemsCopyUser,
                paperItemsCopyUser,
                scissorItemsCopyUser
            );
            items = firstItems;
            console.log("itemsEnd", firstItems);
            await fetchUpdate(blockchain.account);
            finalResult();
        } else {
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
                console.log("reset");
                console.log("items", tempItems);
                // setItems(tempItems);
                items = tempItems;
                // console.log("items set", items);
            } else {
                handleCountDownChange5s();
                resultToPlayPage(showResult);
                console.log("Final:");
                console.log("user", userWinCount);
                console.log("comp", compWinCount);
                getUserWinCount(userWinCount);
                getComputerWinCount(compWinCount);
                // Reset variables
                userWinCount = 0;
                compWinCount = 0;
                rockItemsCopyUser = [...rockItems];
                paperItemsCopyUser = [...paperItems];
                scissorItemsCopyUser = [...scissorItems];
                rockItemsCopyComp = [...rockItems];
                paperItemsCopyComp = [...paperItems];
                scissorItemsCopyComp = [...scissorItems];
                console.log("end");
                console.log("rock", rockItemsCopyUser);
                console.log("paper", paperItemsCopyUser);
                console.log("scissor", scissorItemsCopyUser);
                firstItems = randomItems(
                    rockItemsCopyUser,
                    paperItemsCopyUser,
                    scissorItemsCopyUser
                );
                items = firstItems;
                console.log("itemsEnd", firstItems);
                await fetchUpdate(blockchain.account);
                finalResult();
            }
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
