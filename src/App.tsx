import { Body, Header, Image } from "./components";
import logo from "./ethereumLogo.png";
import useWeb3Modal from "./hooks/useWeb3Modal";
import { WalletButton } from "./components/WalletButton";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

function App() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  const [balance, setBalance] = useState("");

  useEffect(() => {
    async function start() {
      if (provider) {
        setBalance(ethers.utils.formatEther(await provider.getSigner().getBalance()));
      }
    }
    start();
  }, [provider]);

  return (
    <div>
      <Header>
        {" "}
        <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
      </Header>
      <Body>
        <Image src={logo} alt="react-logo" />
        <p>Hello</p>
        <p>Balance: {balance}</p>
      </Body>
    </div>
  );
}

export default App;
