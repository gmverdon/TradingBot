import React, { Component } from 'react';
import './styles.css';

// Libraries
import { NavLink } from 'react-router-dom'

// Boostrap compopnents
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

class Header extends Component {

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">TradeHub</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/tradehub">TradeHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
