import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertComponent(props) {
  return (
    <Alert key={props.id} variant={props.variant}>
      {props.content}
    </Alert>
  );
}

export default AlertComponent;