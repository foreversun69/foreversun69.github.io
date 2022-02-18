import 'bootstrap/dist/css/bootstrap.min.css';
import { Page_BookManagement } from './pages/bookmanagement/Page_BookManagement';
import { Page_Bootstrap } from './pages/boostrap/Page_Bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import { PageNotFound } from './pages/notfound/PageNotFound';
import { PageStart } from './pages/start/PageStart';

function App() {
  return (
    <>
<Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><Link to={"/"}>Foreversun69</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link ><Link to="/bookmanagement">Buchverwaltung</Link></Nav.Link>
              <Nav.Link ><Link to="/strapi">Strapi-Seite</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<PageStart />} />
        <Route path="/bookmanagement/*" element={<Page_BookManagement />} />
        <Route path="/strapi/*" element={<Page_Bootstrap />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </>
  );
}

export default App;
