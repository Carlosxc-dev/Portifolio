import React from "react";
import './css/hero.css'
import {BsFacebook, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'

export default props => 
    <section className="conteiner-fluid hero">
        <aside className="conteiner w-75 text-center p-3 d-flex flex-column justify-content-center position-absolute top-50 start-50 translate-middle text-light">
            <h1 className="fw-bold ">I'am Carlos Henrique</h1>
            <p className="fw-normal align-self-center">Web-development</p>
            <div className="redes-sociais w-25 d-flex justify-content-between align-self-center ">
                <a href="https://www.facebook.com/profile.php?id=100010009275147" target="_blank" rel="external">
                    <i className="icon"><BsFacebook/></i>
                </a>
                <a href="https://www.instagram.com/carloshenriquecruzxavier/" target="_blank" rel="external">
                    <i className="icon"><BsInstagram/></i>
                </a>
                <a href="https://github.com/Carlosxc-dev" target="_blank" rel="external">
                    <i className="icon"><BsGithub/></i>
                </a>
                <a href="https://www.linkedin.com/in/carlos-henrique-a65a54158/" target="_blank" rel="external">
                    <i className="icon"><BsLinkedin/></i>
                </a>
            </div>
        </aside>
    </section>