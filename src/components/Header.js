import React,{useState} from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useCheckOnlineStatus from "../utils/useCheckOnlineStatus";
const Header =()=>{

  const [btnName,setBtnName]=useState("Login");
  const isLoggedIn=useCheckOnlineStatus();
  const handleLoginClick=()=>{    

    setBtnName((prev)=>prev==="Login"?"Logout":"Login");
   
  } 
  return(
    <div className="header">
     <div className="logo-cotainer">
     <Link to="/"> <img
        className="logo"
        alt="logo"
        src={LOGO_URL}
      /></Link>
     </div>
      <div className="nav-items">
        <ul>
          <div>User Online Status :{isLoggedIn ? "🟢" : "❌"}</div>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLoginClick}>{btnName}</button>
        </ul> 
        </div>
    </div>
  )
}
export default Header;