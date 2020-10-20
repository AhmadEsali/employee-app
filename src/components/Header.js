import React from 'react';
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand as={Link} to='/'>
        Employee App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/add'>
            Create Employee
          </Nav.Link>
        </Nav>

        <Form inline>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Example select</Form.Label>
            <Form.Control as='select'>
              <option value='default' disabled>
                Search By
              </option>
              <option value='email'>email</option>
              <option value='address'>address</option>
              <option value=''>location</option>
            </Form.Control>
          </Form.Group>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
