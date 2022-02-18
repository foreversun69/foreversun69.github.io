import React from "react";
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Overview } from './Overview';
import { ManageBook } from './ManageBook';
import { TimeLine } from './TimeLine';
import { PageNotFound } from "../notfound/PageNotFound";
import { PageStart } from "../start/PageStart";

export function Page_BookManagement(){
    return(
        <>
            {/* Navbar */}
      <Navbar className="ps-5" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand ><Link to="/">Buchverwaltung</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link ><Link to="overview">Übersicht</Link></Nav.Link>
              <Nav.Link ><Link to="managebooks">Neues Buch</Link></Nav.Link>
              <Nav.Link ><Link to="timeline">TimeLine</Link></Nav.Link>
              <Outlet />
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
        <Route path="/" element={<PageStart />} />
        <Route path="overview" element={<Overview />} />
        <Route path="managebooks" element={<ManageBook />} />
        <Route path="timeline" element={<TimeLine />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
        </>
    )
}