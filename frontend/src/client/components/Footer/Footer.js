
import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer= () => {
  return (
    <footer className="footer">
      <div className="container">
      <h1 class="hihi"> Cryptosphere</h1>
        <div className="row">
          <div className="footer-col">
            <h4>Crypto Details</h4>
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/Cryptocurrency" target="_blank">About It</a></li>
              <li><a href="https://bitshills.com/best-cryptocurrency-services-ranked-by-readers/" target="_blank">crypto services</a></li>
              <li><a href="https://www.blockchain-council.org/cryptocurrency/complete-guide-on-cryptocurrency-security/" target="_blank">Security</a></li>
              <li><a href="https://www.investopedia.com/terms/c/cryptocurrency.asp" target="_blank">pros and cons</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>ETH</h4>
            <ul>
              <li><a href="https://ethereum.org/en/eth/" target="_blank">About ETH</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Ethereum" target="_blank">Wikipedia</a></li>
              <li><a href="https://github.com/ethereum" target="_blank">ETH Github</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Why ETH</h4>
            <ul>
            <li><a href="https://101blockchains.com/benefits-of-ethereum-decentralized-platform/" target="_blank">Benifits</a></li>
              <li><a href="https://cryptogeeks.org/what-is-ethereum/#:~:text=Pros%20of%20Ethereum%20Cons%20of%20Ethereum%201.%20It,Cryptocurrency%20is%20Best%3F%20Quick%20Overview%20What%20is%20Ethereum%3F" target="_blank">pros and cons</a></li>
              <li><a href="https://ethereumworldnews.com/ethereum-unique-cryptocurrency-heres/" target="_blank">Uniqueness</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>ETH on socials</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/ethereumproject/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com/ethereum" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com/company/ethereum" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
        <div className="copy-right">© 2023 Cryptosphere. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

