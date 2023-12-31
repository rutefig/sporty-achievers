import "./App.css";
import "@Biconomy/web3-auth/dist/src/style.css";
import { useState, useEffect, useRef } from "react";
import SocialLogin from "@biconomy/web3-auth";
import { ChainId } from "@biconomy/core-types";
import { ethers } from "ethers";
import { IBundler, Bundler } from "@biconomy/bundler";
import {
  BiconomySmartAccount,
  BiconomySmartAccountConfig,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import { IPaymaster, BiconomyPaymaster } from "@biconomy/paymaster";
// import Counter from './Components/Counter';
import { Outlet } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";
import Transak from "@biconomy/transak";

const bundler: IBundler = new Bundler({
  bundlerUrl: "https://bundler.biconomy.io/api/v2/80001/abc", // you can get this value from biconomy dashboard.
  chainId: ChainId.POLYGON_MUMBAI,
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
});

const paymaster: IPaymaster = new BiconomyPaymaster({
  paymasterUrl:
    "https://paymaster.biconomy.io/api/v1/80001/cIhIeS-I0.7e1f17b1-6ebb-454c-8499-c5f66dd098c6",
});

export function Layout() {
  const [smartAccount, setSmartAccount] = useState<any>(null);
  const [interval, enableInterval] = useState(false);
  const sdkRef = useRef<SocialLogin | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    let configureLogin: any;
    if (interval) {
      configureLogin = setInterval(() => {
        if (!!sdkRef.current?.provider) {
          setupSmartAccount();
          clearInterval(configureLogin);
        }
      }, 1000);
    }
  }, [interval]);

  async function login() {
    if (!sdkRef.current) {
      const socialLoginSDK = new SocialLogin();
      const signature1 = await socialLoginSDK.whitelistUrl(
        "https://aanft.vercel.app"
      );
      await socialLoginSDK.init({
        chainId: ethers.utils.hexValue(ChainId.POLYGON_MUMBAI).toString(),
        network: "testnet",
        whitelistUrls: {
          "https://aanft.vercel.app": signature1,
        },
      });
      sdkRef.current = socialLoginSDK;
    }
    if (!sdkRef.current.provider) {
      sdkRef.current.showWallet();
      enableInterval(true);
    } else {
      setupSmartAccount();
    }
  }

  async function setupSmartAccount() {
    if (!sdkRef?.current?.provider) return;
    sdkRef.current.hideWallet();
    setLoading(true);
    const web3Provider = new ethers.providers.Web3Provider(
      sdkRef.current.provider
    );
    setProvider(web3Provider);

    try {
      const biconomySmartAccountConfig: BiconomySmartAccountConfig = {
        signer: web3Provider.getSigner(),
        chainId: ChainId.POLYGON_MUMBAI,
        bundler: bundler,
        paymaster: paymaster,
      };
      let biconomySmartAccount = new BiconomySmartAccount(
        biconomySmartAccountConfig
      );
      biconomySmartAccount = await biconomySmartAccount.init();
      console.log("owner: ", biconomySmartAccount.owner);
      console.log(
        "address: ",
        await biconomySmartAccount.getSmartAccountAddress()
      );
      console.log(
        "deployed: ",
        await biconomySmartAccount.isAccountDeployed(
          await biconomySmartAccount.getSmartAccountAddress()
        )
      );

      setSmartAccount(biconomySmartAccount);
      setLoading(false);
    } catch (err) {
      console.log("error setting up smart account... ", err);
    }
  }

  const callPayment = async () => {
    transak.init();
  }

  const logout = async () => {
    if (!sdkRef.current) {
      console.error("Web3Modal not initialized.");
      return;
    }
    await sdkRef.current.logout();
    sdkRef.current.hideWallet();
    setSmartAccount(null);
    enableInterval(false);
  };

    // use this info for transak package
  const transak = new Transak('STAGING', {
    walletAddress: "0xa1e89b3e483ceec616ab6fb9684e7193518ec124",
  });

  return (
    <div>
      {/* <h1>
        {" "}
        Biconomy Smart Accounts using social login + Gasless Transactions
      </h1> */}
      {!smartAccount && !loading && (
        <>
        <Button
          colorScheme="teal"
          position={"absolute"}
          right={8}
          top={2}
          onClick={login}
          mr={40}
          mt={10}
        >
          Login
        </Button>
        </>
      )}
      {loading && <Spinner>loading</Spinner>}
      {!!smartAccount && (
        <div className="buttonWrapper">
          {/* <h3>Smart account address:</h3>
          <p>{smartAccount.address}</p> */}
          {/* <Counter smartAccount={smartAccount} provider={provider} /> */}
          {/* <Button onClick={logout}>Logout</Button> */}
          <Button 
          colorScheme="teal"
          position={"absolute"}
          top={12}
          right={250}
          onClick={ callPayment }
          mr={40}>
          Fund Wallet
          </Button>
          <Button
          colorScheme="teal"
          position={"absolute"}
          right={8}
          top={2}
          onClick={logout}
          mr={40}
          mt={10}
          >
         { "(" + smartAccount.address.substring(0,4)}...{smartAccount.address.slice(-4) + ")" }  Logout
        </Button>
        </div>
      )}
      <Outlet />
    </div>
  );
}
