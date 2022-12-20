import React from "react";
import Nav from '../templates/nav'
import "./css/header.css"


export default props =>
    <header id="header" className="conteiner-fluid row justify-content-center align-itens-center " 
            style={{zIndex: '9999' , backgroundColor: "#292C36"}}>
        <div className="col-10 position-fixed" style={{zIndex: '9999'}}>
            <Nav/>  
        </div>
    </header>