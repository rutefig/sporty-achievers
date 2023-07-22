import { ethers } from "hardhat";
import { PRIVATE_KEY, MAILBOX_ADDRESS, EAS_ADDRESS, ALCHEMY_API_KEY_SEPOLIA } from "./constants";
import { task } from "hardhat/config";

async function main() {
  // Select the Sepolia network for deploying AttesterResolver contract
const proofOfAchievementAddress = "0xcf762DdF30C34f221E813A6ee217138057a3C8E2";
const sepoliaProvider = new ethers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY_SEPOLIA}`);
const sepoliaWallet = new ethers.Wallet(PRIVATE_KEY, sepoliaProvider);

// Deploy AttesterResolver contract
const AttesterResolverFactory = await ethers.getContractFactory("AttesterResolver", sepoliaWallet);
const poachAddress = proofOfAchievementAddress;
const attesterResolver = await AttesterResolverFactory.deploy(EAS_ADDRESS, poachAddress, MAILBOX_ADDRESS);

await attesterResolver.waitForDeployment();

console.log("AttesterResolver deployed to Sepolia network:", await attesterResolver.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});