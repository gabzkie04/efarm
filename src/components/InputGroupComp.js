import React from 'react'
import { InputGroup, FormControl, Button } from "react-bootstrap";
function InputGroupComp(props) {
  return (
    <InputGroup>
      {
        props.dataSet.map((i) => {
          return (
            i.comp
          )
        })
      }
    </InputGroup>
  );
}

export default InputGroupComp;