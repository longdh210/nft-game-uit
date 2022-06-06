const hre = require("hardhat");

const main = async () => {
    // const RockPaperScissorToken = await hre.ethers.getContractFactory(
    //     "RockPaperScissor"
    // );
    const RPSToken = await hre.ethers.getContractFactory("RPS");

    // const rockPaperScissorToken = await RockPaperScissorToken.deploy();
    const rpsToken = await RPSToken.deploy("RockPaperSissor", "RPS");

    // await rockPaperScissorToken.deployed();
    await rpsToken.deployed();

    // console.log(
    //     "RockPaperScissor deployed to: ",
    //     rockPaperScissorToken.address
    // );
    console.log("RPSToken deployed to: ", rpsToken.address);
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
