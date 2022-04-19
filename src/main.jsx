import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from "./Body"
import Header from './components/Header'
import Footer from "./components/Footer"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Footer/>
  </React.StrictMode>
)
