import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ALCHEMY_API_KEY_SEPOLIA, ALCHEMY_API_KEY_MUMBAI, PRIVATE_KEY } from "./scripts/constants";

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
  },
};

export default config;
