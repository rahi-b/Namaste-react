import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
    const [btnNameReact,setBtnNameReact]= useState("Login");

    console.log('header rendered');

    useEffect(()=>{
        console.log('useEffect is work');
    },[btnNameReact])

    return (
        <div className="header">
            <div className="logo-container"> 
                <img src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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