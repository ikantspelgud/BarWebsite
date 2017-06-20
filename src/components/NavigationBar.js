import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default () => {
  return (
    <Navbar className="App-header" bsStyle="inverse">
      <Navbar.Header>
        <LinkContainer to="/">
          <Navbar.Brand>Donn's Depot</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/schedule">
            <NavItem eventKey={1}>Schedule</NavItem>
          </LinkContainer>
          <LinkContainer to="/musicians">
            <NavItem eventKey={2}>Musicians</NavItem>
          </LinkContainer>
          <LinkContainer to="/drinks">
            <NavItem eventKey={3}>Drinks</NavItem>
          </LinkContainer>
          <LinkContainer to="/location">
            <NavItem eventKey={4}>Location</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
