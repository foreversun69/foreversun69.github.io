import React from "react"
import { Form, Button, Col } from 'react-bootstrap';

export function ManageBook(){
    return(
/* <Form >
<Container className="container-xs" >
  <Row className="">
    <Form.Group as={Col} controlId="formGridTitel">
      <Form.Label>Titel</Form.Label>
      <Form.Control type="text" placeholder="Titel vom Buch" />
    </Form.Group>
  </Row>

  <Row className="">
    <Form.Group as={Col} controlId="formGridAutor">
      <Form.Label>Autor</Form.Label>
      <Form.Control type="text" placeholder="Name des Autors" />
    </Form.Group>
  </Row>

  <Row className="">
    <Form.Group as={Col} controlId="formGridKommentar">
      <Form.Label>Kommentar</Form.Label>
      <Form.Control type="text" placeholder={"Kommentar"} />
    </Form.Group>
  </Row>

  <Button className="" variant="primary" type="submit">
    Submit
  </Button>
</Container>
</Form> */


<div className="container">
  <div className="row justify-content-md-center m-2">
    <div className="col col-lg-6">
    <Form.Group as={Col} controlId="formGridTitel">
      <Form.Label>Titel</Form.Label>
      <Form.Control type="text" placeholder="Titel vom Buch" />
    </Form.Group>
    </div>
  </div>
  <div className="row justify-content-md-center m-2">
    <div className="col col-lg-6">
    <Form.Group as={Col} controlId="formGridAutor">
      <Form.Label>Autor</Form.Label>
      <Form.Control type="text" placeholder="Name des Autors" />
    </Form.Group>
    </div>
  </div>
  <div className="row justify-content-md-center m-2">
    <div className="col col-lg-6">
    <Form.Group as={Col} controlId="formGridKommentar">
      <Form.Label>Kommentar</Form.Label>
      <Form.Control type="text" placeholder={"Kommentar"} />
    </Form.Group>
    </div>
  </div>
  <div className="row justify-content-md-center pt-2 m-2">
    <div className="col col-lg-6">
    <Button className="" variant="primary" type="submit">
        Submit
    </Button>
    </div>
  </div>
  
</div>




    )
}