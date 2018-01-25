import React, { Component } from 'react';
import './styles.css';

// Libraries
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

export default class Header extends Component {
  render = () => (
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">TradeHub</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/tradehub">TradeHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
