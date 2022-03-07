import React from 'react'
import { Form } from "react-bootstrap";

function SelectComponent(props) {
  return (
    <Form.Group controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <select className='form-control' value={props.value} onChange={props.func}>
          <option value="" selected hidden></option>
          {props.data.map((i) => {
          return (<option key={i.value} value={i.value}>
              {i.option}
          </option>)
      })
      }</select>
    </Form.Group>
  );
}

export default SelectComponent