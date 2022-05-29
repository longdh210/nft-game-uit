const { rockItems, paperItems, scissorItems } = require("./parts/items.js")
// import { rpsItems } from './parts/items.js'

const loop = (items) => {
    let ramdomNum;
    for(let i = 0; i < 1; i++){
        ramdomNum = Math.floor(Math.random()*items.length);
        const ramdomItem = items[ramdomNum];
        items.splice(ramdomNum, 1);
        return ramdomItem;
    }
}

function getItems() {
    let items = [];
    const rockItemsCopy = rockItems;
    const paperItemsCopy = paperItems;
    const scissorItemsCopy = scissorItems;
    // console.log(rockItemsCopy);
    // console.log(paperItemsCopy);
    // console.log(scissorItemsCopy);
    items.push(loop(rockItemsCopy));
    items.push(loop(paperItemsCopy));
    items.push(loop(scissorItemsCopy));
    console.log(items);
    return items;
}

export default getItems;