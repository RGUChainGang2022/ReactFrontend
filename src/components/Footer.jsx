import React from "react";
import "./css/header_styles.css"

function Footer(){
    return(
        <footer>
        <div className="address">
            <p>27 Albyn Place</p>
            <p>Aberdeen</p>
            <p>AB10 1DB</p>
            <p>Scotland</p>
            <br/>
            <p>Email: contactus@global-ec.com</p>
        </div>

        <div className="sitemap">
            <nav>
                <ul>
                    <li>This website is not the Global E&C website!</li>
                    <br/><br/>
                    <li><a href="https://global-ec.com/our-company">Our Company</a></li>
                    <li><a href="https://global-ec.com/contact">Contact Us</a></li>
                </ul>
            </nav>

        </div>

        <div className="social">
            <a href="https://wwww.linkedin.com"><i className="fa fa-linkedin" aria-hidden="true"></i>LINKEDIN</a>
            <a href="https://www.youtube.com"><i className="fa fa-youtube-play" aria-hidden="true"></i>YOUTUBE</a>
            <a href="https://wwww.facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i>FACEBOOK</a>
        </div>


</footer>
    )
   
}

export default Footer;