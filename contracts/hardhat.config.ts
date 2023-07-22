import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const QUICKNODE_API_KEY = process.env.QUICKNODE_API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.19",

  networks: {
    sepolia: {
      url: `https://smart-icy-liquid.ethereum-sepolia.discover.quiknode.pro/${QUICKNODE_API_KEY}/`,
      accounts: [PRIVATE_KEY!],
    },
  },
};

export default config;
