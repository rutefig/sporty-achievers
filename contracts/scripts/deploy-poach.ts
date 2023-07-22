import { ethers } from "hardhat";
import { EAS_ADDRESS, MAILBOX_ADDRESS, PRIVATE_KEY, ALCHEMY_API_KEY_MUMBAI } from "./constants"
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();


async function main() {
  // Select the Mumbai network for deploying ProofOfAchievement and HyperInitiateMint contracts

  console.log("API Key ", ALCHEMY_API_KEY_MUMBAI)
  const mumbaiProvider = new ethers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY_MUMBAI}`);
  
  const mumbaiWallet = new ethers.Wallet(PRIVATE_KEY, mumbaiProvider);

  // Deploy ProofOfAchievement contract
  const ProofOfAchievementFactory = await ethers.getContractFactory("ProofOfAchievement", mumbaiWallet);
  const proofOfAchievement = await ProofOfAchievementFactory.deploy(MAILBOX_ADDRESS);

  await proofOfAchievement.waitForDeployment();

  console.log("ProofOfAchievement deployed to Mumbai network:", await proofOfAchievement.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});