import { ethers } from "hardhat";

async function main() {
  const sponsorMe = await ethers.deployContract("SponsorMe");

  await sponsorMe.waitForDeployment();

  console.log("SponsorMe deployed to:", await sponsorMe.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});