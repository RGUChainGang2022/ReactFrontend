import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from "./Body"
import Header from './components/Header'
import Footer from "./components/Footer"
import axios from "axios"

var loc = window.location.search;

var location = new URLSearchParams(loc);
location = location.get("server")

var serverChosen;
var serverChosenFormatted;

switch(location){
  case "oxygenone":
    serverChosen = "https://oxygen-1.cchain.me/last_blocks/11";
    serverChosenFormatted = "Oxygen 1"
    break;

  case "oxygentwo":
    serverChosen = "https://oxygen-2.cchain.me/last_blocks/11";
    serverChosenFormatted = "Oxygen 2"
    break;

  case "carbon":
    serverChosen = "https://carbon.cchain.me/last_blocks/11";
    serverChosenFormatted = "Carbon"
    break;
  default:
    serverChosen = "https://carbon.cchain.me/last_blocks/11";
    serverChosenFormatted = "Carbon"
    break;

}

axios.get(serverChosen)
        .then(res => {
          const data = res.data;

          return ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
              <Header/>
              <Body data={data} server={serverChosenFormatted}/>
              <Footer/>
            </React.StrictMode>
          )
        })