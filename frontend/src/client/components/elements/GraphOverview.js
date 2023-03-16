import React from "react";
import Badge from "react-bootstrap/Badge";

function GraphOverview() {
  return (
    <div className="overview-box" style={{ height: "500px" }}>
      <div className="box-heading">
        Chart
        <Badge pill bg="success" style={{"margin-left":"20px"}}>
          Ethereum
        </Badge>
        
      </div>
      
    </div>
  );
}

export default GraphOverview;
