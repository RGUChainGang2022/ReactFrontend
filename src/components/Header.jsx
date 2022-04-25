import React from "react";
import logo from "./images/logo-white.svg";
import "./css/header_styles.css"

function Header(){
        return(
            <header>
                <div>
                 <a href="index.html">
                    <img src={logo} id="logo" alt="Company logo" width="250" height="150"/> 
                </a>
                <h1 id="title">Live carbon tracker</h1>
                </div>
            </header>
        )
    }


export default Header;