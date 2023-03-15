import React from "react";

function About() {
  return (
    <div className="overview-box" style={{ height: "300px" }}>
      <div className="box-heading">About</div>
      <p style={{ padding: "20px" }}>
        {" "}
        Ethereum is a decentralized, open-source blockchain with smart contract
        functionality. Ether is the native cryptocurrency of the platform. Among
        cryptocurrencies, ether is second only to bitcoin in market
        capitalization. Ethereum was conceived in 2013 by programmer Vitalik
        Buterin. Ethereum allows anyone to deploy permanent and immutable
        decentralized applications onto it, with which users can interact.
        Decentralized finance (DeFi) applications provide a broad array of
        financial services without the need for typical financial intermediaries
        like brokerages, exchanges, or banks, such as allowing cryptocurrency
        users to borrow against their holdings or lend them out for interest.
        Ethereum also allows users to create and exchange NFTs, which are unique
        tokens
        <a href="https://en.wikipedia.org/wiki/Ethereum" target="_blank">
          {" "}
          <br></br>
          more...{" "}
        </a>{" "}
      </p>
    </div>
  );
}

export default About;
