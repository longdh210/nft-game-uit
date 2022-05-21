import { useState } from 'react';
import { game, randomItems} from './logicGame';
import { TokenRenderer } from './tokenRenderer';
import { rockItems, paperItems, scissorItems } from '../parts/items.js';


const firstItems = randomItems();
let userWinCount = 0;
let compWinCount = 0;

const RandomItems = () => {
    const [items, setItems] = useState(firstItems);
    const handleClick = (item) => {
        let result = game(item);
        if(result == 1) {
            userWinCount++;
        } else if(result == -1) {
            compWinCount++;
        } 
        const tempItems = randomItems();
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
        }
    }

    return (
        items.map((item, index) => (
            <TokenRenderer token={item} key={index} onClick={() => handleClick(item)}></TokenRenderer>
        ))
    )
}

export default RandomItems;