import React from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import '../App.css';

const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timerProgressBar: true,
});

function ToastComponent(props) {
  return Toast.fire({
    icon: props.icon,
    title: props.title,
    text: props.text,
    timer: props.timer ? props.timer : 1500,
  });
}

export default ToastComponent