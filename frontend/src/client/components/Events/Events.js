import React from "react";
import "./styles.css";
import Navbar from "../Navbar"
import BackToTopButton from "../BackToTopButton";
import Footer from "../Footer";

function Events() {
  const cstyle={
    "width": "70%",
    "height": "auto",
    "position": "relative"
}
  return (
    <div id="action4" className="Main">
      <Navbar c={3}/> 
    <div className="main">
    <h3 className="section-heading" style={{"marginBottom":"110px","width": "7%" }}>Events</h3>
      <div className="container" style={cstyle}>
        <ul>
          <li>
            <div className="circle"></div>
            <div className="date">January 2023</div>
            <div className="content">
              <h2 className="title">Shanghai(planned)</h2>
              <p>TimeStamp: TBD, Block Number: TBD and ETH price: TBD</p>
              <a href="https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md" target="_blank">Read More</a>
            </div>
          </li>
          <li>
            <div className="circle"></div>
            <div className="date">Sep 2022</div>
            <div className="content">
              <h2 className="title">Paris (The Merge)</h2>
              <p>Block Number: 1553794 and ETH price:$1472USD. </p>
              <a href="https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/paris.md" target="_blank">Read More</a>
            </div>
          </li>
          <li>
            <div className="circle"></div>
            <div className="date">Sep 2022</div>
            <div className="content">
              <h2 className="title">Bellatrix</h2>
              <p>Epoch Number:144896 and ETH price:$1558 USD. </p>
              <a href="https://github.com/ethereum/consensus-specs/tree/dev/specs/bellatrix" target="_blank">Read More</a>
            </div>
          </li>
          <li>
            <div className="circle"></div>
            <div className="date">June 2022</div>
            <div className="content">
              <h2 className="title">Gray Glacier</h2>
              <p>Block Number:15,050,000 and ETH price: $1069 USD.</p>
              <a href="https://blog.ethereum.org/2022/06/16/gray-glacier-announcement" target="_blank">Read More</a>
            </div>
          </li>
          <li>
            <div className="circle"></div>
            <div className="date">Dec 2021</div>
            <div className="content">
              <h2 className="title">Arrow Glacier</h2>
              <p>Block Number:13,773,000 and ETH price: $4111 USD.</p>
              <a href="https://web.archive.org/web/20211207064430/https://ethereum.org/en/" target="_blank">Read More</a>
            </div>
          </li>

          <li>
            <div className="circle"></div>
            <div className="date">Oct 2021</div>
            <div className="content">
              <h2 className="title">Altair</h2>
              <p>Epoch Number:74,240 and ETH price: $4024 USD.</p>
              <a href="https://github.com/ethereum/consensus-specs/tree/dev/specs/altair" target="_blank">Read More</a>
            </div>
          </li>

          <li>
            <div className="circle"></div>
            <div className="date">Aug 2021</div>
            <div className="content">
              <h2 className="title">London</h2>
              <p>Block Number:12,965,000 and ETH price: $2621 USD.</p>
              <a href="https://blog.ethereum.org/2021/06/18/london-testnets-announcement" target="_blank">Read More</a>
            </div>
          </li>

          <li>
            <div className="circle"></div>
            <div className="date">Dec 2020</div>
            <div className="content">
              <h2 className="title">Beacon Chain Block Number</h2>
              <p>Beacon Chain Block Number:1 and ETH price: $586.23 USD.</p>
              <a href="https://ethereum.org/en/upgrades/beacon-chain/" target="_blank">Read More</a>
            </div>
          </li>

          <li>
            <div className="circle"></div>
            <div className="date">Dec 2019</div>
            <div className="content">
              <h2 className="title">Istanbul</h2>
              <p>Block Number:9,069,000 and ETH price: $151.06 USD.</p>
              <a href="https://blog.ethereum.org/2019/11/20/ethereum-istanbul-upgrade-announcement" target="_blank">Read More</a>
            </div>
          </li>

          <li>
            <div className="circle"></div>
            <div className="date">Oct 2017</div>
            <div className="content">
              <h2 className="title">Byzantium</h2>
              <p>Block Number:4,370,000 and ETH price: $334.23 USD.</p>
              <a href="https://www.investopedia.com/news/what-byzantium-hard-fork-ethereum/#:~:text=The%20Byzantium%20hard%20fork%20was%20an%20update%20to,an%20essential%20and%20critical%20update%20to%20Ethereum%E2%80%99s%20blockchain." target="_blank">Read More</a>
            </div>
          </li>

          <li>
            <div className="circle"></div>
            <div className="date">Nov 2016</div>
            <div className="content">
              <h2 className="title">Spurious Dragon</h2>
              <p>Block Number:2,675,000 and ETH price: $9.84 USD.</p>
              <a href="https://www.ccn.com/ethereum-prepares-spurious-dragon-hardfork/" target="_blank">Read More</a>
            </div>
          </li>

          <li>
            <div className="circle"></div>
            <div className="date">Sep 2015</div>
            <div className="content">
              <h2 className="title">Frontier Thawing</h2>
              <p>Block Number:200,000 and ETH price: $1.24 USD.</p>
              <a href="https://blog.ethereum.org/2015/08/04/the-thawing-frontier" target="_blank">Read More</a>
            </div>
          </li>

          <li>
            <div className="circle"></div>
            <div className="date">July - Sep 2014</div>
            <div className="content">
              <h2 className="title">Ether Sale</h2>
              <p>Ether officially went on sale for 42 days.</p>
              <a href="https://www.coindesk.com/markets/2020/07/11/sale-of-the-century-the-inside-story-of-ethereums-2014-premine/" target="_blank">Read More</a>
            </div>
          </li>

          <li>
            <div className="circle"></div>
            <div className="date">Nov 2013</div>
            <div className="content">
              <h2 className="title">Whitepaper released.</h2>
              <p>The introductory paper, published in 2013 by Vitalik Buterin, the founder of Ethereum, before the project's launch in 2015.</p>
              <a href="https://ethereum.org/en/whitepaper/" target="_blank">Read More</a>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <Footer></Footer>
    <BackToTopButton/>
    </div>
  );
}

export default Events;