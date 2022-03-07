import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
function TotalCard(props) {

    const color = (setColor) => {
        switch (setColor) {
          case "primary":
            return "bg-primary";
          case "success":
            return "bg-success";
          case "danger":
            return "bg-danger";
          case "warning":
            return "bg-warning";
          default:
            return "bg-default";
        }
    }
  return (
    <Col md={props.md}>
      <Card className={color(props.color) + " p-3"}>
        <Row>
          <Col md={4}>
            <h1>
              <i className={props.icon + " fa-2x"}></i>
            </h1>
          </Col>
          <Col md={8}>
            <h6>{props.title}</h6>
            <h2>{props.value}</h2>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default TotalCard