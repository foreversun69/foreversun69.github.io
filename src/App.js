import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Overview } from './Overview';
import { ManageBook } from './ManageBook';
import { TimeLine } from './TimeLine';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Buchverwaltung</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link ><Link to="/">Übersicht</Link></Nav.Link>
              <Nav.Link ><Link to="/managebooks">Neues Buch</Link></Nav.Link>
              <Nav.Link ><Link to="/timeline">TimeLine</Link></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main  */}
      <Routes>
        <Route exact path="/managebooks" element={<ManageBook />} />
        <Route exact path="/timeline" element={<TimeLine />} />
        <Route exact path="/" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default App;
