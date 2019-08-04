import React, {Component} from 'react';
import { Nav, Navbar,NavDropdown } from  'react-bootstrap';
import { Form, Button, ButtonToolbar } from 'react-bootstrap';

class navbar extends Component {
 
  render() {
    return (

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"><strong>Flow</strong>
      <img
        src="/logo.svg"
        width="13"
        height="13"
        //className="d-inline-block align-left"
        //alt="React Bootstrap logo"
      />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home"> </Nav.Link>
          <Nav.Link href="#link">WhyFlow?</Nav.Link>
          <Nav.Link href="#link">What's New</Nav.Link>
          <NavDropdown title="Solution" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Product Teams</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Creative Teams</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Marketing Teams</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Finance Teams</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Your Company</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link"> Pricing</Nav.Link>
        </Nav>
        <Form inline>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button> */}
        </Form>
        <Nav className="right">
          <ButtonToolbar>        
            <Nav.Link href="#link"><Button variant="light">Login</Button></Nav.Link>
            
            <Nav.Link href="#home"> <Button variant="warning"> Try Flow for 30 Days </Button></Nav.Link>          
          </ButtonToolbar>
        </Nav>
      </Navbar.Collapse>
    </Navbar> 
      
    );
  }
}

export default navbar;