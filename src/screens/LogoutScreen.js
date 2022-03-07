import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function LogoutScreen() {
const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("farmUserInfo");
        navigate("/login");
    }, [])  
    
  return (
    <div>LogoutScreen</div>
  )
}

export default LogoutScreen