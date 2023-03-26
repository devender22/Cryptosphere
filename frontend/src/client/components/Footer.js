import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <div>
      <Row style={{ marginTop: "100px" }}>
        <Col md={2} style={{ textAlign: "right" }}>
          <img
            src="https://i.postimg.cc/kgSsGmCB/logo.png"
            height="70"
            width="70"
          ></img>
        </Col>
        <Col md={1} style={{ textAlign: "left" }} className="webName">
          <h5 className="brandName">Cryptosphere</h5>
        </Col>
        <Col md={9} className="webLine">
          <div
            style={{ borderTop: "3px solid #27c499", paddingBottom: "5px" }}
          ></div>
        </Col>
      </Row>
      {/* <MDBFooter className="text-center text-white social">
        <MDBContainer className="pt-4">
          <section className="mb-4">
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="sm"
              className="text-dark m-1"
              href="/Ethereum/overview"
              role="button"
              disabled
            >
              <MDBIcon fab className="fab fa-facebook-f social-btn" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="sm"
              className="text-dark m-1"
              href="/Ethereum/overview"
              role="button"
              disabled
            >
              <MDBIcon fab className="fa-twitter social-btn" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="sm"
              className="text-dark m-1"
              href="/Ethereum/overview"
              role="button"
              disabled
            >
              <MDBIcon fab className="fa-google social-btn" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="sm"
              className="text-dark m-1"
              href="/Ethereum/overview"
              role="button"
              disabled
            >
              <MDBIcon fab className="fa-instagram social-btn" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="sm"
              className="text-dark m-1"
              href="/Ethereum/overview"
              role="button"
              disabled
            >
              <MDBIcon fab className="fa-linkedin social-btn" />
            </MDBBtn>
          </section>
        </MDBContainer>
      </MDBFooter> */}
      <footer className="footer">{`Copyright © Cryptosphere 2023`}</footer>
    </div>
  );
}

export default Footer;
