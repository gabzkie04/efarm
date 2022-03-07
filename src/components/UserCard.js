import React from 'react'
import { Row, Card, Col, Badge, ListGroup } from "react-bootstrap";
import "../App.css";

function UserCard(props) {
  return (
    <Col md={props.md}>
      <Card className="py-3 px-5">
        <Row>
          <Col md={4}>
            <center>
              <img
                src={
                  props.avatar
                    ? props.avatar
                    : "https://www.w3schools.com/howto/img_avatar.png"
                }
                alt="Avatar"
                width={100}
                className="avatar img-responsive"
              />
            </center>
          </Col>
          <Col md={8}>
            <h1>{props.name}</h1>
            <h6>
              <Badge bg="success">{props.role}</Badge>
            </h6>
          </Col>
          <Col md={12}>
            <ListGroup variant="flush">
              <ListGroup.Item>Contact: <b>{props.contact}</b></ListGroup.Item>
              <ListGroup.Item>Email: <b>{props.email}</b></ListGroup.Item>
              <ListGroup.Item>Birthdate <b>{props.birthdate}</b></ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}

export default UserCard