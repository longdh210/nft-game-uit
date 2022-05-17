const { rockItems, paperItems, scissorItems } = require("../parts/items.js");

// const totalItems = rockItems.concat(paperItems, scissorItems);
const totalItems = [];
// console.log(totalItems);
// const rockItemsCopy = rockItems;
// const paperItemsCopy = paperItems;
// const scissorItemsCopy = scissorItems;

const loop = (items) => {
    let ramdomNum;
    for(let i = 0; i < 1; i++){
        ramdomNum = Math.floor(Math.random()*items.length);
        const ramdomItem = items[ramdomNum];
        items.splice(ramdomNum, 1);
        return ramdomItem;
    }
}

export const getUserChoice = (_rockItems, _paperItems, _scissorItems) => {
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

const getComputerChoice = () => {
    let items = [];
    const rockItemsCopy = rockItems;
    const paperItemsCopy = paperItems;
    const scissorItemsCopy = scissorItems;
    items.push(loop(rockItemsCopy));
    items.push(loop(paperItemsCopy));
    items.push(loop(scissorItemsCopy));
    const ramdomItem = items[Math.floor(Math.random()*3)];
    return ramdomItem;
}

// console.log(getComputerChoice());

export const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    console.log("userChoice", userChoice);
    console.log("computerChoice", computerChoice.name);
    switch(userChoice.name + computerChoice.name) {
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
            console.log("user win");
            return;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            console.log("computer win");
            return;
        case "rockrock":
            if(userChoice.level > computerChoice.level) {
                console.log("user win", userChoice.level, computerChoice.level);
            } else if(userChoice.level < computerChoice.level) {
                console.log("computer win", userChoice.level, computerChoice.level);
            } else if(userChoice.level == computerChoice.level) {
                console.log("draw", userChoice.level, computerChoice.level);
            }
            return;
        case "paperpaper":
            if(userChoice.level > computerChoice.level) {
                console.log("user win", userChoice.level, computerChoice.level);
            } else if(userChoice.level < computerChoice.level) {
                console.log("computer win", userChoice.level, computerChoice.level);
            } else if(userChoice.level == computerChoice.level) {
                console.log("draw", userChoice.level, computerChoice.level);
            }
            return;
        case "scissorscissor":
            if(userChoice.level > computerChoice.level) {
                console.log("user win", userChoice.level, computerChoice.level);
            } else if(userChoice.level < computerChoice.level) {
                console.log("computer win", userChoice.level, computerChoice.level);
            } else if(userChoice.level == computerChoice.level) {
                console.log("draw", userChoice.level, computerChoice.level);
            }
            return;
    }
}