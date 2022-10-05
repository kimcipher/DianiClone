// import React, {useState} from 'react'
// import {walletconnecticon} from "./icons"
// import "./css/walletModal.css"

// function WalletConnect() {
//     const [currentAccount, setCurrentAccount] = useState("")
//   const checkIfWalletIsConnected = async() => {
//     try{
//       const {ethereum} = window;
//       if (!ethereum) {
//         console.log("Make sure you have metamask");
//       } else {
//         console.log("We have the ethereum object", ethereum);
//       }
  
//       const accounts = await ethereum.request({method: "eth_accounts"});
  
//       if (accounts.length !== 0){
//         const account = accounts[0];
//         console.log("Found and authorized account : ", account);
//         setCurrentAccount(account)
//       } else {
//         console.log("No authorized account available")
//       }
//     } catch(error){
//       console.log(error)
//     }


    
//   }
//   const connectWallet = async() => {
//     try{
//       const {ethereum} = window;

//       if(!ethereum) {
//         alert("Get Metamask");
//         return;
//       }
//       const accounts = await ethereum.request({ method:"eth_requestAccounts"});

//       console.log("connected", accounts[0]);
//       setCurrentAccount(accounts[0]);
//     } catch(error){
//       console.log(error)
//     }
//   }
//   return (
//     <>
//         {!currentAccount && (
//         <div className="main-connect" onClick={connectWallet} ><h5> <div className="main-icon">{walletconnecticon}</div></h5> </div>
//         )}
//     </>
//   )
// }

// export default WalletConnect