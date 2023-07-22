import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Signer } from 'ethers';
import { ProofOfAchievement } from '../typechain-types';

describe('proofOfAchievement', function () {
  let proofOfAchievement: ProofOfAchievement;
  let owner: Signer;
  let athlete: Signer;
  let notOwner: Signer;

  beforeEach(async () => {
    const ProofOfAchievementFactory = await ethers.getContractFactory('ProofOfAchievement');
    [owner, athlete, notOwner] = await ethers.getSigners();
    proofOfAchievement = await ProofOfAchievementFactory.connect(owner).deploy();
  });

  it('should mint a new token', async () => {
    const tokenId = 0;
    const tokenURI = 'https://example.com/token/1';

    await proofOfAchievement.connect(owner).mintAchievement(await athlete.getAddress(), tokenURI);

    const ownerOfToken = await proofOfAchievement.ownerOf(tokenId);
    expect(ownerOfToken).to.equal(await athlete.getAddress());

    const uriOfToken = await proofOfAchievement.tokenURI(tokenId);
    expect(uriOfToken).to.equal(tokenURI);
  });

  it('should not allow non-owner to mint', async () => {
    const tokenURI = 'https://example.com/token/1';

    await expect(
      proofOfAchievement.connect(notOwner).mintAchievement(await athlete.getAddress(), tokenURI)
    ).to.be.revertedWith('Ownable: caller is not the owner');
  });
});