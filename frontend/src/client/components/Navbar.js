import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './SearchBox';
import React,{useState} from 'react';


function NavScrollExample(props) {
  return (
    <Navbar bg="light" expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand href="/"><img id="brand" src="https://i.postimg.cc/kgSsGmCB/logo.png" width="50" height="50" alt=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Ethereum/overview" id="opt-1" className="nav-opt" style={{"color":props.c===1?"#27c499":""}}>Overview</Nav.Link>
            <Nav.Link href="/Ethereum/charts" className="nav-opt" style={{"color":props.c===2?"#27c499":""}}>Charts</Nav.Link>
            <Nav.Link href="/Ethereum/events" className="nav-opt" style={{"color":props.c===3?"#27c499":""}}>Events</Nav.Link>
            <Nav.Link href="/Ethereum/news" className="nav-opt" style={{"color":props.c===4?"#27c499":""}}>News</Nav.Link>
          </Nav>
          <SearchBox/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;