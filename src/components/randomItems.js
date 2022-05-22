import { useState } from 'react';
import { game, randomItems} from './logicGame';
import { TokenRenderer } from './tokenRenderer';
import { useNavigate } from 'react-router-dom';
import { rockItems, paperItems, scissorItems } from '../parts/items.js';

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

const RandomItems = () => {
    const [items, setItems] = useState(firstItems);
    const navigate = useNavigate();

    const handleClick = (item) => {
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