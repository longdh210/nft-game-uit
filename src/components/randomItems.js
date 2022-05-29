import { useState, useEffect, useCallback } from 'react';
import { game, randomItems} from './logicGame';
import { TokenRenderer } from './tokenRenderer';
import { useNavigate } from 'react-router-dom';
import { rockItems, paperItems, scissorItems } from '../parts/items.js';
import { fetchUpdate } from '../fetchAPI/fetchAPI';
import { useSelector } from 'react-redux';

// Copy array of items
let rockItemsCopyUser = [...rockItems];
let paperItemsCopyUser = [...paperItems];
let scissorItemsCopyUser = [...scissorItems];
let rockItemsCopyComp = [...rockItems];
let paperItemsCopyComp = [...paperItems];
let scissorItemsCopyComp = [...scissorItems];

// Random first item for user
let firstItems = randomItems(rockItemsCopyUser, paperItemsCopyUser, scissorItemsCopyUser);

let userWinCount = 0;
let compWinCount = 0;

const RandomItems = ({ countDown, onCountDownChange }) => {
    const blockchain = useSelector((state) => state.blockchain);
    const [items, setItems] = useState(firstItems);
    const [userClick, setUserClick] = useState(false);
    const [firstMount, setFirstMount] = useState(true);
    
    const navigate = useNavigate();

    // reset countdown from playPage
    const handleCountDownChange = useCallback(() => {
        onCountDownChange(10)
    }, [onCountDownChange])
    
    useEffect(() => {
        if(firstMount == true) {
            handleCountDownChange();
        }
        if(countDown == 0 && userClick == false && firstMount == false) {
            autoRandomItem();
            handleCountDownChange()
        } 
        setFirstMount(false);
    }, [countDown]);

    const autoRandomItem = async () => {
        const randomItem = items[Math.floor(Math.random() * 3)];
        let result = game(randomItem, rockItemsCopyComp, paperItemsCopyComp, scissorItemsCopyComp);
        if(result == 1) {
            userWinCount++;
        } else if(result == -1) {
            compWinCount++;
        }
        // Check current item
        const tempItems = randomItems(rockItemsCopyUser, paperItemsCopyUser, scissorItemsCopyUser);
        if(tempItems != 0) {
            setItems(tempItems);
        } else {
            if(userWinCount > compWinCount) {
                alert("User win");
            } else if (compWinCount > userWinCount) {
                alert("Computer win");
            } else {
                alert("Draw");
            }
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
            firstItems = randomItems(rockItemsCopyUser, paperItemsCopyUser, scissorItemsCopyUser);
            await fetchUpdate(blockchain.account);
            navigate("/menu");
        }
    } 

    const handleClick = async (item) => {
        handleCountDownChange();
        console.log("user win count", userWinCount);
        
        let result = game(item, rockItemsCopyComp, paperItemsCopyComp, scissorItemsCopyComp);
        if(result == 1) {
            userWinCount++;
        } else if(result == -1) {
            compWinCount++;
        }
        // Check current item
        const tempItems = randomItems(rockItemsCopyUser, paperItemsCopyUser, scissorItemsCopyUser);
        if(tempItems != 0) {
            setItems(tempItems);
        } else {
            if(userWinCount > compWinCount) {
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
            firstItems = randomItems(rockItemsCopyUser, paperItemsCopyUser, scissorItemsCopyUser);
            await fetchUpdate(blockchain.account);
            navigate("/menu");
        }
    }

    return (
        items.map((item, index) => (
            <TokenRenderer token={item} key={index} onClick={() => handleClick(item)}></TokenRenderer>
        ))
    )
}

export default RandomItems;