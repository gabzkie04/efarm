import React from 'react'
import NavbarComponent from "../components/NavbarComponent";
import { NavBarSettings } from "../dataSet/NavBarDataSet";
import { Container, Row, Col } from 'react-bootstrap';

import logo from '../logo.png';
function AboutScreen() {

    const NavBarData = NavBarSettings();
  return (
    <div>
      <NavbarComponent data={NavBarData} />
      <Container>
        <Row>
          <Col md={4}>
            <img src={logo} width={"100%"} height={"auto"} />
          </Col>
          <Col md={8}>
            <h1 className="text-center mt-5">E-Farm</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutScreen