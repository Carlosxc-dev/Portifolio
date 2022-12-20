import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// import dos templates 
import Header from '../components/templates/header'
import Main from '../components/templates/main'
import Footer from '../components/templates/Footer'
import Hero from "../components/templates/Hero" 

export default () =>
    <div className="app overflow-hidden">
        <Header/>
        <Hero/>
        <Main/>
        <Footer/>
    </div>