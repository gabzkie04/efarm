import React from 'react'
import { Form } from 'react-bootstrap';
function Input(props) {
  return (
    <Form.Group controlId={props.controlId} className={props.formGroupClass}>
      <Form.Label className={props.formLabelClasss}>{props.label}</Form.Label>
      <Form.Control
        className={props.formControlClass}
        value={props.value}
        type={props.type}
        onChange={props.func}
      />
    </Form.Group>
  );
}

export default Input