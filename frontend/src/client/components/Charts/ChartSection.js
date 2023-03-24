import { React,useEffect,useState } from "react";
// import Tile from "./Tile";
// import axios from "axios";
import EODPriceChart from './EODPriceChart';
import IntradayPriceChart from './IntradayPriceChart';
import EODVWAPChart from './EODVWAPChart';
import EODVolumeChart from './EODVolumeChart';
import MktCapChart from './MktCapChart';
import IntradayVWAPChart from './IntradayVWAPChart';
import IntradayVolumeChart from './IntradayVolumeChart';
import EODPriceTSChart from './EODPriceTSChart';
import IntradayPriceTSChart from './IntradayPriceTSChart';
import BackToTopButton from "../BackToTopButton";
import Navbar from "../Navbar";
function ChartSection() {

  return (
    <div id="action2" className="Main">
      <Navbar c={2}/>
      <h3 className="section-heading" style={{ width: "6%" }}>
        Charts
      </h3>
      <div className="tile-group">
      <EODPriceChart />
      <EODPriceTSChart />
      <IntradayPriceChart/>
      <IntradayPriceTSChart/>
      <EODVWAPChart />
      <IntradayVWAPChart/>
      <EODVolumeChart />
      <IntradayVolumeChart/>
      <MktCapChart />
      </div>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default ChartSection;
