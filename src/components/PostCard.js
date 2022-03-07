import React from 'react'
import { Card, Col} from 'react-bootstrap';
function PostCard(props) {
  return (
    <Col md={props.md} className="mb-4">
      <Card>
        {props.image ? <Card.Img variant="top" src={props.image} /> : null}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>
            <small>Created at: {props.created_at}</small>
          </Card.Text>
        </Card.Body>
        <Card.Body>{props.body}</Card.Body>
      </Card>
    </Col>
  );
}

export default PostCard