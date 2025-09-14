import React,{useState} from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constants";
import useCheckOnlineStatus from "../utils/useCheckOnlineStatus";
const Header =()=>{
const cartItems = useSelector((store)=>store.cart.items);
  const [btnName,setBtnName]=useState("Login");
  const isLoggedIn=useCheckOnlineStatus();
  const handleLoginClick=()=>{    

    setBtnName((prev)=>prev==="Login"?"Logout":"Login");
   
  } 
  return(
    <div className="flex justify-between  border-2 border-black p-2 bg-gray-400 text-black">
     <div className="max-w-40">
     <Link to="/"> <img
       className="w-34 cursor-pointer"
        alt="logo"
        src={LOGO_URL}
      /></Link>
     </div>
      <div className="flex items-center">
        <ul className="flex gap-2">
          <div className="font-bold">User Online Status :{isLoggedIn ? "🟢" : "❌"}</div>
          <Link to="/" className=" text-blue-600 underline cursor-pointer">Home</Link>
          <Link to="/about" className=" text-blue-600 underline cursor-pointer">About Us</Link>
          <Link to="/contact" className=" text-blue-600 underline cursor-pointer">Contact Us</Link>
         <Link to="/cart">Cart ({cartItems.length})Item</Link>
          <button className="border w-20 h-10 rounded-xl border-black p-2 text-sm cursor-pointer" onClick={handleLoginClick}>{btnName}</button>
        </ul> 
        </div>
    </div>
  )
}
export default Header;