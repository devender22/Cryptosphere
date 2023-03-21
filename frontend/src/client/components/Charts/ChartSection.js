import { React,useEffect,useState } from "react";
// import Tile from "./Tile";
// import axios from "axios";
import IntradayChart from "./intraday_graph";

function ChartSection() {

  return (
    <div id="action2">
      <h3 className="section-heading" style={{ width: "6%" }}>
        Charts
      </h3>
      <div className="tile-group">
      <IntradayChart />
      </div>
      
    </div>
  );
}

export default ChartSection;
