import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    const [btnNameReact,setBtnNameReact]= useState("Login");

    console.log('header rendered');

    useEffect(()=>{
        console.log('useEffect is work');
    },[btnNameReact])

    const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container"> 
                <img  className="w-40" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4">online status: {onlineStatus? "online": "offline" }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"> <Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={()=>{
                        btnNameReact === "Login" ? 
                        setBtnNameReact("Logout"):
                        setBtnNameReact("Login")
                        
                    }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;