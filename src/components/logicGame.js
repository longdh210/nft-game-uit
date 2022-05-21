const { rockItems, paperItems, scissorItems } = require('../parts/items.js');

let rockItemsCopyUser = [...rockItems];
let paperItemsCopyUser = [...paperItems];
let scissorItemsCopyUser = [...scissorItems];
let rockItemsCopyComp = [...rockItems];
let paperItemsCopyComp = [...paperItems];
let scissorItemsCopyComp = [...scissorItems];

const loop = (items) => {
    let ramdomNum;
    ramdomNum = Math.floor(Math.random() * items.length);
    const randomItem = items[ramdomNum];
    items.splice(ramdomNum, 1);
    if(randomItem === undefined) {
        console.log("random comp undefinded")
        return 0;
    }
    return randomItem;
}

export const randomItems = () => {
    let items = [];
    let loopRock = loop(rockItemsCopyUser);
    let loopPaper = loop(paperItemsCopyUser);
    let loopScissor = loop(scissorItemsCopyUser);
    items.push(loopPaper);
    items.push(loopRock);
    items.push(loopScissor);
    if(items.indexOf(0) !== -1) {
        return 0;
    }
    return items;
}

const getComputerChoice = () => {
    let items = [];
    let loopRock = loop(rockItemsCopyComp);
    let loopPaper = loop(paperItemsCopyComp);
    let loopScissor = loop(scissorItemsCopyComp);
    items.push(loopPaper);
    items.push(loopRock);
    items.push(loopScissor);
    if(items.indexOf(0) !== -1) {
        console.log("comp 0");
        return 0;
    }
    const ramdomItem = items[Math.floor(Math.random() * 3)];
    return ramdomItem;
}

export const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    console.log("userChoice", userChoice);
    console.log("computerChoice", computerChoice);
    switch (userChoice.name + computerChoice.name) {
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
            console.log("user win");
            return 1;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            console.log("computer win");
            return -1;
        case "rockrock":
            if (userChoice.level > computerChoice.level) {
                console.log("user win", userChoice.level, computerChoice.level);
                return 1;
            } else if (userChoice.level < computerChoice.level) {
                console.log("computer win", userChoice.level, computerChoice.level);
                return -1;
            } else if (userChoice.level == computerChoice.level) {
                console.log("draw", userChoice.level, computerChoice.level);
                return 0;
            }
            return;
        case "paperpaper":
            if (userChoice.level > computerChoice.level) {
                console.log("user win", userChoice.level, computerChoice.level);
                return 1;
            } else if (userChoice.level < computerChoice.level) {
                console.log("computer win", userChoice.level, computerChoice.level);
                return -1;
            } else if (userChoice.level == computerChoice.level) {
                console.log("draw", userChoice.level, computerChoice.level);
                return 0;
            }
            return;
        case "scissorscissor":
            if (userChoice.level > computerChoice.level) {
                console.log("user win", userChoice.level, computerChoice.level);
                return 1;
            } else if (userChoice.level < computerChoice.level) {
                console.log("computer win", userChoice.level, computerChoice.level);
                return -1;
            } else if (userChoice.level == computerChoice.level) {
                console.log("draw", userChoice.level, computerChoice.level);
                return 0;
            }
            return;
    }
}