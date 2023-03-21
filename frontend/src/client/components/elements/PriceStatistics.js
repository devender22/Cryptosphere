import React from "react";
import Statistic from "./Statistic";
function PriceStatistics(){
    return(
        <div className="overview-box" style={{"height":"550px"}}>
            <div className="box-heading">ETH Price Statistics</div>
            <div style={{"padding":"20px"}}>
                <Statistic></Statistic>
                <Statistic></Statistic>
                <Statistic></Statistic>
            </div>
        </div>
    );
}

export default PriceStatistics;