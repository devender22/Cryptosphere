import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './SearchBox';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#action1"><img src="logo.png" width="50" height="50" alt=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id="opt-1" className="nav-opt">Overview</Nav.Link>
            <Nav.Link href="#action2" className="nav-opt">Charts</Nav.Link>
            <Nav.Link href="#action3" className="nav-opt">Research</Nav.Link>
            <Nav.Link href="#action4" className="nav-opt">Events</Nav.Link>
            <Nav.Link href="#action5" className="nav-opt">News</Nav.Link>
          </Nav>
          <SearchBox/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;