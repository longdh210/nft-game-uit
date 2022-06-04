// Random a item from 3 items, reduce that item and return
const reduce = (items) => {
    let ramdomNum;
    ramdomNum = Math.floor(Math.random() * items.length);
    const randomItem = items[ramdomNum];
    items.splice(ramdomNum, 1);
    // If no more items left, return 0
    if (randomItem === undefined) {
        return 0;
    }
    return randomItem;
};

// Random 3 items for user from 15 items inital
export const randomItems = (
    _rockItemsCopyUser,
    _paperItemsCopyUser,
    _scissorItemsCopyUser
) => {
    let items = [];
    let loopRock = reduce(_rockItemsCopyUser);
    let loopPaper = reduce(_paperItemsCopyUser);
    let loopScissor = reduce(_scissorItemsCopyUser);
    items.push(loopPaper);
    items.push(loopRock);
    items.push(loopScissor);
    // Check if no more items left, return 0
    if (items.indexOf(0) !== -1) {
        console.log("user 0");
        return 0;
    }
    return items;
};

const getComputerChoice = (
    _rockItemsCopyComp,
    _paperItemsCopyComp,
    _scissorItemsCopyComp
) => {
    let items = [];

    let loopRock = reduce(_rockItemsCopyComp);
    let loopPaper = reduce(_paperItemsCopyComp);
    let loopScissor = reduce(_scissorItemsCopyComp);

    items.push(loopPaper);
    items.push(loopRock);
    items.push(loopScissor);
    // Check if no more items left, return 0
    if (items.indexOf(0) !== -1) {
        console.log("comp 0");
        return 0;
    }
    const ramdomItem = items[Math.floor(Math.random() * 3)];
    return ramdomItem;
};

export const game = (
    userChoice,
    _rockItemsCopyComp,
    _paperItemsCopyComp,
    _scissorItemsCopyComp
) => {
    const computerChoice = getComputerChoice(
        _rockItemsCopyComp,
        _paperItemsCopyComp,
        _scissorItemsCopyComp
    );
    console.log("userChoice", userChoice);
    console.log("computerChoice", computerChoice);
    switch (userChoice.name + computerChoice.name) {
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
            console.log("user win");
            return [userChoice, computerChoice, 1, "You win"];
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            console.log("computer win");
            return [userChoice, computerChoice, -1, "Bot win"];
        case "rockrock":
            if (userChoice.level > computerChoice.level) {
                console.log("user win", userChoice.level, computerChoice.level);
                return [userChoice, computerChoice, 1, "You win"];
            } else if (userChoice.level < computerChoice.level) {
                console.log(
                    "computer win",
                    userChoice.level,
                    computerChoice.level
                );
                return [userChoice, computerChoice, -1, "Bot win"];
            } else if (userChoice.level == computerChoice.level) {
                console.log("draw", userChoice.level, computerChoice.level);
                return [userChoice, computerChoice, 0, "Draw"];
            }
            return;
        case "paperpaper":
            if (userChoice.level > computerChoice.level) {
                console.log("user win", userChoice.level, computerChoice.level);
                return [userChoice, computerChoice, 1, "You win"];
            } else if (userChoice.level < computerChoice.level) {
                console.log(
                    "computer win",
                    userChoice.level,
                    computerChoice.level
                );
                return [userChoice, computerChoice, -1, "Bot win"];
            } else if (userChoice.level == computerChoice.level) {
                console.log("draw", userChoice.level, computerChoice.level);
                return [userChoice, computerChoice, 0, "Draw"];
            }
            return;
        case "scissorscissor":
            if (userChoice.level > computerChoice.level) {
                console.log("user win", userChoice.level, computerChoice.level);
                return [userChoice, computerChoice, 1, "You win"];
            } else if (userChoice.level < computerChoice.level) {
                console.log(
                    "computer win",
                    userChoice.level,
                    computerChoice.level
                );
                return [userChoice, computerChoice, -1, "Bot win"];
            } else if (userChoice.level == computerChoice.level) {
                console.log("draw", userChoice.level, computerChoice.level);
                return [userChoice, computerChoice, 0, "Draw"];
            }
            return;
    }
};
