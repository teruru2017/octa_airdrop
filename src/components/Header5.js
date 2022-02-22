import React, {useEffect,useState} from 'react'

import {ethers} from 'ethers'
import Link from 'next/link';
import NavItem from './NavItem';
//import './WalletCard.css'
const WalletCard = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
// window.ethereum.on('accountsChanged', accountChangedHandler);

// window.ethereum.on('chainChanged', chainChangedHandler);
	


    return (
        
		<div className='walletCard'>
            
		
         <Link href="/">
          <a className="navbar-brand">
            <span className="fw-bold text-secondary text-warning">
				<img src="/logo.png" alt="" height={50}/>

				</span>
          </a>
        </Link>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
          <li> <NavItem to='/airdrop'>Airdrop</NavItem> </li>
          <li> <NavItem to='/myinventory'>My Inventory</NavItem> </li>
          <li> <NavItem to='/marketplace'>Marketplace</NavItem> </li>
          <button type="button" className="btn btn-outline-primary me-2 px-3 btn-sm" onClick={connectWalletHandler}>
          <span>Connect Wallet</span>
        {/* <h4> {"Connection to MetaMask using window.ethereum methods"} </h4> */}
			{/* <button onClick={connectWalletHandler}>{connButtonText}</button> */}
			<div className='accountDisplay'>
				<h7>{defaultAccount}</h7>
			</div>
			<div className='balanceDisplay'>
				<h7> {userBalance}</h7>
			</div>
			{errorMessage}
            </button>
            </ul>
        </div>
      
	
	 
	);
}
export default WalletCard;