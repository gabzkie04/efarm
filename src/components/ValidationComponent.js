import React from 'react'

function ValidationComponent(props) {
  return (
    <>
      {console.log(props.dataSet)}
      {props.dataSet.map((i) => {
        return i.valid === false ? (
          <p className="text-danger">
            <i className="fa fa-times"></i> {i.value}
          </p>
        ) : (
          <p className="text-success">
            <i className="fa fa-check"></i> {i.value}
          </p>
        );
      })}
    </>
  );
}

export default ValidationComponent;