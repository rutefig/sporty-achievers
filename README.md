# Sporty Achievers👋 
#### Full Stack Blockchain Development ✨
<p>ETH Global Paris Hackathon submission</p>
<p>This project focus on solving the issues athletes have this moment to get financial support, visibility, credibility and sponsorships based on their value. 
We are implementing a solution that ties the real value and performance of an athlete to their profile, creating a Proof of Achievement that is going to represent each medal, trophy or personal record. With this solution athletes don't have to carry their physical medals or trophies to show to other people what they achieved so far.
In order to have a more strategic business plan we are going to also create scholarships for sports applications and then match the athletes with brands that are willing to team up with them.</p>

### Technical Description and Smart Contract Architecture
The protocol is done by using Attestations on-chain from EAS with a proper schema and it was deployed on Sepolia Network (https://sepolia.easscan.org/schema/view/0x0f84c6516aaad2f70568705d6294ad8c713bdb21816e5bc57bae9541ce19aebb), because this schema is tied to a contract that acts as a Resolver (https://sepolia.etherscan.io/address/0xc9F20B56a8D76CbF1C1B39691C7F5855fde01E68), this contract is going to call the onAttest function every time an attestation gets created and this is going to dispatch a message to a mailbox on HyperLane since we need to deploy the NFT representing the Proof of Achievement on Mumbai Network (https://mumbai.polygonscan.com/tx/0xe7d2672595d980d419a11f2fa20e1248204c020730b570eedf6ca55b2f91ff77). After the message is being dispatched the contract that implements the NFT is going to receive the message from Hyperlane and is going to mint the NFT.
There is also a contract implemented that is going to store all the funds each athlete gets from sponsoring through the dapp (https://mumbai.polygonscan.com/address/0x209d76E32518d9C09A3f96e8B8B1de6a9E795279).
The frontend is built in React using Vite and Chakra UI, and integrates Biconomy for the Account Abstraction and Gasless Payments, and also Sismo Connect to split athletes in certain groups according to certain restrictions. Also, to fetch the NFT's to render on each athlete profile we used Airstack.
<img width="260" alt="Screenshot 2023-07-23 at 06 45 22" src="https://github.com/rutefig/sporty-achievers/assets/23409167/057825c5-4596-49b2-bfe0-37c17c6fa61b">



**What we learned:**
* Create, compile & deploy  smart contracts to EVM-compatible chain incl. polygon Mumbai, Celo, Sepolia, Linea, using Hardhat.
* Use EAS (Ethereum Attestation Service) for proving off-chain and on-chain attestations
* Using Hyperlane for creating chain agnostic tokens
* Fetch NFTs data with Airstack 
* Learn how to use Biconomy: Social account / Account abstraction for login and authentication, Gasless Payments



Deliverables:
[Figma Design](https://www.figma.com/file/QAvEbBbUgPoibLXBJ7gVG7/Untitled?type=design&node-id=1-2&mode=design&t=yuADCHwoypu7sprr-0) </br>
[Workshop Presentation Slides](https://www.canva.com/design/DAFpXjHjCAk/ShucBjks85CoavsYM0FtJA/edit?utm_content=DAFpXjHjCAk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## 🤖 Tech Stack and Chain Info:

#### Tech Stack: 
 - Solidity
 - Hardhat
 - Ethers.js
 - EAS (Ethereum Attestation Service)
 - Hyperlane
 - Sepolia
 - Next.js / Typescript
 - Chakra UI
 - Biconomy
 - Sismo
 

#### Deployments:
- **AttestationSchema:** https://sepolia.easscan.org/schema/view/0x0f84c6516aaad2f70568705d6294ad8c713bdb21816e5bc57bae9541ce19aebb
- **AttestationResolver:** https://sepolia.etherscan.io/address/0xc9F20B56a8D76CbF1C1B39691C7F5855fde01E68
- **ProofOfAchievement:** https://mumbai.polygonscan.com/tx/0xe7d2672595d980d419a11f2fa20e1248204c020730b570eedf6ca55b2f91ff77
- **SponsorMe:** https://mumbai.polygonscan.com/address/0x209d76E32518d9C09A3f96e8B8B1de6a9E795279

#### Other Characteristics: 
 - Monorepo
  
 ---

# 🏄‍♂️ Quick Start for Running Locally

#### Before you clone this project make sure you have the following installed on your machine (in this order)!
* [Node.js](https://nodejs.org/en/) 
* [Yarn](https://classic.yarnpkg.com/en/docs/install/)
* [Git](https://git-scm.com/downloads)

#### You can check by running these commands on your terminal:

```bash
node -v
npm -v
yarn -v
git --version
```
> If any don't return back the version info then you must install those to ensure your machine meets the prerequisites.

#### Install all project dependencies

* Inside the root directory run `yarn install`
  
yarn install
```

# 📱 Run the App

* In the root directory, run the command `yarn dev`

```bash
yarn dev
```
* Open http://localhost:5173/ --host

---
