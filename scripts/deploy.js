const hre = require("hardhat")

const main = async () => {
    const RockPaperScissorToken = await hre.ethers.getContractFactory("RockPaperScissor");
    const rockPaperScissorToken = await RockPaperScissorToken.deploy();
    await rockPaperScissorToken.deployed();
    console.log("RockPaperScissor deployed to: ", rockPaperScissorToken.address);
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error)
    process.exit(1)
})