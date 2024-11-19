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
        <div className="header">
            <div className="logo-container"> 
                <img src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>online status: {onlineStatus? "online": "offline" }</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li> <Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
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