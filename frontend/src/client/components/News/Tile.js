import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

export default function Tile(props) {
  return (
    <div className="overview-box" style={{ height: "200px" }}>
      <Row style={{ padding: "20px" }}>
        <Col sm={2}>
          <div class="fill">
            <img src={props.img}></img>
          </div>
        </Col>
        <Col sm={10}>
          <div className="tile-content">
            <h4 classNme="tile-heading">{props.title}</h4>
            <div className="tile-des">
             {props.content}{" "}<br></br>
             <a href={props.full}>Read full article</a>
            </div>
            <span className="source"><i><span>Source: {props.source}</span> <span className="dt"> {props.time}</span></i></span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
