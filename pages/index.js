import Layout from '../src/components/Layout';
import Head from 'next/head';
//import "../styles/airdrop.css"

//import { useWeb3UserProvider } from "../src/components/userProviderContext";

//import CONTRACT_ADDRESS from '../constants/Contract_Address';
//import { BoxNftContractAddr } from '../config';

export default function Home() {
  
  //const { provider, userAddress } = useWeb3UserProvider()

  return (
    <><style jsx>
      {`.index-content{
      text-align: center;
     
    }`}
    </style><Layout>
        <h1 className="index-content text-white">Welcome all hunters</h1>
        <img src="/Application FK2.png" alt="" height={600} width={900} />
      </Layout></>

  );
}