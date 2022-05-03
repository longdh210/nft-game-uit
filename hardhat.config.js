require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    testnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [privateKey]
    },
    polygon: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/1IISvtbO2J8Uz_s2akC4cdk9qm6rnrY0",
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
