import React from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
function SweetAlertComponent(props) {
  return MySwal.fire({
    title: props.title,
    footer: props.footer,
    toast: props.isToast,
    text:props.text,
    position: props.position,
    icon:props.icon
  }).then(props.thenFunc);
}

export default SweetAlertComponent