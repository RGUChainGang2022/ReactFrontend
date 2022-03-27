import React from "react";
import logo from "./images/logo-white.svg";
import "./css/stylesheet.css"

function Header(){
    return(
        <header>
            <div>
             <a href="index.html">
                <img src={logo} alt="Company logo" width="250" height="150"/> 
            </a>
            </div>
        </header>
    )
}

export default Header;