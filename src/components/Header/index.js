import React, { Component } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

const Header = () => (
  <Navbar color="faded" light expand="md">
    <NavbarBrand href="/">TradeHub</NavbarBrand>
    <NavbarToggler />
    <Collapse isOpen navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/tradehub">TradeHub</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

export default Header;
