import React, {Component} from 'react';
import {Navlink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export class Navigation extends Component {

    render () {

        return (
          <Navbar className = "mt-3" bg="dark" expand="lg">
              <Navbar.Brand className="text-white" href="/"> Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className="text-white" href="/veggies">Veggies</Nav.Link>
                  <Nav.Link className="text-white" href="/history">History</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>


        )

    }


}