import React from "react";
import "./css/header_styles.css"

function Footer(){
    return(
        <footer>
        <div className="address">
            <h4>E&C Global headquarters</h4>
            <p>27 Albyn Place</p>
            <p>Aberdeen</p>
            <p>AB10 1DB</p>
            <p>Scotland</p>
        </div>

        <div className="sitemap">
            <nav>
                <ul>
                    <li><em>Please note this website is not the Global E&C website!</em></li>
                    <br/><br/>
                    <li><a href="https://global-ec.com/">E&C website</a></li>
                    <li><a href="https://global-ec.com/contact">E&C contact page</a></li>
                </ul>
            </nav>

        </div>

        <div className="social">
            <h4>Website links</h4>
            <a href="https://github.com/RGUChainGang2022"><i className="fa fa-linkedin" aria-hidden="true"></i>Organization Github</a>
            <a href="https://github.com/RGUChainGang2022/ReactFrontend"><i className="fa fa-youtube-play" aria-hidden="true"></i>Project repository</a>
            <a href="https://carbon.cchain.me/last_blocks/11"><i className="fa fa-facebook" aria-hidden="true"></i>API endpoint</a>
        </div>


    </footer>
    )
   
}

export default Footer;