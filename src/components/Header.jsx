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
                <div id="title">
                    <h1>Live carbon tracker</h1>
                    <label htmlFor="select">Server:</label>
                    <select id="selector" onChange={function(){
                        switch(document.getElementById("selector").value){
                            case "0":
                                document.location.href = "/carbon"
                                break;
                            case "1":
                                document.location.href = "/oxygenone"
                                break;
                            case "2":
                                document.location.href = "/oxygentwo"
                                break;
                        }
                    }}>
                        <option value="unselected" selected>Select server</option>
                        <option value="0">Carbon</option>
                        <option value="1">Oxygen-1</option>
                        <option value="2">Oxygen-2</option>
                    </select>
                </div>
                </div>
            </header>
        )
    }


export default Header;