import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from "./Body"
import Header from './components/Header'
import Footer from "./components/Footer"
import axios from "axios"

axios.get(`https://carbon.cchain.me/last_blocks/6`)
        .then(res => {
          const data = res.data;

          ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
              <Header/>
              <Body data={data}/>
              <Footer/>
            </React.StrictMode>
          )
        })

