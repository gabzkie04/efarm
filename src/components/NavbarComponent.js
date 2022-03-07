import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import logo from "../logo.png";

function NavbarComponent(props) {
  return (
    <Navbar bg={props.data.bg} variant={props.data.variant} expand="lg" className="mb-4">
      <Container>
        <LinkContainer to={props.data.brand.link}>
          <Navbar.Brand>
            <img src={logo} width={50} height={"auto"} />
            {props.data.brand.value}
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              {
                  props.data.links.map((i) => {
                    return i.dropdown.length > 0 ? (
                      <>
                        <NavDropdown title={i.value} id="basic-nav-dropdown">
                          {i.dropdown.map((d) => {
                            return (
                              <LinkContainer to={d.link}>
                                <NavDropdown.Item >
                                  {d.value}
                                </NavDropdown.Item>
                              </LinkContainer>
                            );
                          })}
                        </NavDropdown>
                      </>
                    ) : (
                      <LinkContainer to={i.link}>
                        <Nav.Link href="">{i.value}</Nav.Link>
                      </LinkContainer>
                    );
                  })
              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent