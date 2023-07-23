import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import { ALCHEMY_API_KEY_SEPOLIA, ALCHEMY_API_KEY_MUMBAI, PRIVATE_KEY, ETHERSCAN_API_KEY } from "./scripts/constants";

const config: HardhatUserConfig = {
  solidity: "0.8.19",

  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY_SEPOLIA}/`,
      accounts: [PRIVATE_KEY!],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY_MUMBAI}`,
      accounts: [PRIVATE_KEY!],
    },
    linea: {
      url: `https://linea-goerli.infura.io/v3/8fc45489f2bb4e2984c10e2b0c238c95`,
      accounts: [PRIVATE_KEY!],
    },
    "mantle-testnet": {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [PRIVATE_KEY!],
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  }
};

export default config;
