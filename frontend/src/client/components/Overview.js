
import React from 'react';
import '../../css/App.css';

export default function Overview(props) {
  return (
   
    <div className="Home">
      <h1 class="figma_heading">Overview</h1>
      <h2> About ETH</h2>
      <p> Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization.

Ethereum was conceived in 2013 by programmer Vitalik Buterin. Ethereum allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact. Decentralized finance (DeFi) applications provide a broad array of financial services without the need for typical financial intermediaries like brokerages, exchanges, or banks, such as allowing cryptocurrency users to borrow against their holdings or lend them out for interest. Ethereum also allows users to create and exchange NFTs, which are unique tokens representing ownership of an associated asset or privilege, as recognized by any number of institutions. Additionally, many other cryptocurrencies utilize the ERC-20 token standard on top of the Ethereum blockchain and have utilized the platform for initial coin offerings. </p>

<div>
  <h2> Summary</h2>
  <h3> Price={props.price}  Market Value={props.value} Volume={props.volume} </h3>

</div>

    </div>
  );
}
