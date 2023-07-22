import { ethers } from "hardhat";

import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const QUICKNODE_API_KEY = process.env.QUICKNODE_API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY!;

const MAILBOX_ADDRESS = "0xCC737a94FecaeC165AbCf12dED095BB13F037685";

const EAS_ADDRESS = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";

async function main() {
  // Select the Mumbai network for deploying ProofOfAchievement and HyperInitiateMint contracts
  const mumbaiProvider = new ethers.JsonRpcProvider(`https://smart-icy-liquid.ethereum-mumbai.discover.quiknode.pro/${QUICKNODE_API_KEY}/`);
  const mumbaiWallet = new ethers.Wallet(PRIVATE_KEY, mumbaiProvider);

  // Deploy ProofOfAchievement contract
  const ProofOfAchievementFactory = await ethers.getContractFactory("ProofOfAchievement", mumbaiWallet);
  const proofOfAchievement = await ProofOfAchievementFactory.deploy(MAILBOX_ADDRESS);

  await proofOfAchievement.waitForDeployment();

  console.log("ProofOfAchievement deployed to Mumbai network:", proofOfAchievement.getAddress());

  // Select the Sepolia network for deploying AttesterResolver contract
  const sepoliaProvider = new ethers.JsonRpcProvider(`https://smart-icy-liquid.ethereum-sepolia.discover.quiknode.pro/${QUICKNODE_API_KEY}/`);
  const sepoliaWallet = new ethers.Wallet(PRIVATE_KEY, sepoliaProvider);

  // Deploy AttesterResolver contract
  const AttesterResolverFactory = await ethers.getContractFactory("AttesterResolver", sepoliaWallet);
  const poachAddress = await proofOfAchievement.getAddress();
  const attesterResolver = await AttesterResolverFactory.deploy(EAS_ADDRESS, poachAddress, MAILBOX_ADDRESS);

  await attesterResolver.waitForDeployment();

  console.log("AttesterResolver deployed to Sepolia network:", attesterResolver.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});