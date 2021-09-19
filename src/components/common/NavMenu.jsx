import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">React Best Practises</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavMenu;
