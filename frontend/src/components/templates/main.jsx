import React from "react";
import img from '../../assets/img/img_about.jpg'
import Card from '../pages/Card'
import CardWork from "../pages/CardWork";
import './css/main.css'

import img1 from '../../assets/icons/capa-cads2.svg'
import img2 from '../../assets/icons/capa-cads3.svg'
import img3 from '../../assets/icons/capa-cards.svg'
import img4 from '../../assets/icons/capa-cards1.svg'

// import {TiHtml5} from 'react-icons/ti'


export default props =>
    <main className="conteiner row justify-content-center align-itens-center">

        {/* about me  */}
        <section className="col-10 p-5 conteiner_my" id="about">
            <div className="d-flex flex-row h-100">
                <aside className="w-50 position-relative box">
                    <img src={img} alt="imagem de escritorio" width={{width: "525px"}} height={"300px"} className="image rounded rounded-2 " />   
                    <div className="border border-4 ret position-absolute bottom-0 end-0"></div>      
                </aside>
                <article className="w-50 d-flex flex-column justify-content-center align-items-start">
                    <div className="conteiner-fluid p-3 d-flex flex-column justify-content-evenly">
                        <h1 className="fs-5 text-primary m-2">About me</h1>
                        <h2 className="m-2">I'am Carlos henrique</h2>
                        <p className="text-secondary m-2">
                            I'm 24 years old, I'm from Sete Lagoas-MG. I'm studying Computer Engineering at UNIFEI. 
                            I got to know the Web world a year ago and since then I've been developing projects to improve myself in the area. 
                        </p>
                    </div>
                </article>
            </div>
        </section>

        {/* what i do */}
        <section className="conteiner col-10 p-5" id="skills">
            <div className="d-flex flex-column align-items-center" >
                <h1 className="fs-5 text-primary">Watch I Do </h1>
                <h2>Specializing in</h2>
                <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                    <Card />
                </div>
            </div>
        </section>

        {/* work  projetos*/}
        <section className="conteiner col-10 p-5 justify-content-center" id="work">
            <h1 className="fs-5 text-primary text-center">Portifolio</h1>
            <h2 className="text-center">Latest Projects</h2>
            <article className="d-flex justify-content-start align-items-center flex-wrap ">
                <CardWork 
                    img={img1}
                    nome="Cordel Encantado" 
                    text="Site created for didactic purposes about placement of fixed and scrool images, fonts and links."
                    link="https://carlosxc-dev.github.io/projeto_site_poesia/"
                    />
                <CardWork 
                    img={img2}
                    nome="Estrutura de dados"
                    text="First website created using HTML and CSS"
                    link="https://carlosxc-dev.github.io/projeto_site_estruturaDados/"
                    />
                <CardWork 
                    img={img3}
                    nome="Portifólio"
                    text="Portfolio developed to publicize all the works developed"
                    link="https://carlosxc-dev.github.io/Portifolio/"
                    />
                <CardWork
                    img={img4}
                    nome="Calculadora"
                    text="React project of a basic iphone calculator."
                    link="https://carlosxc-dev.github.io/projeto_site_calculadora/"
                />
            </article>
        </section>

        {/* contact */}
        <section className='col-10 p-5 d-flex justify-content-center' id="contact"> 
            <article className="w-75 d-flex flex-column justify-content-center align-items-center rounded-4" style={{width: "980px", height: "277px", background: "#292C36"}}>
                    <h1>Have any project in mind ?</h1>
                    <a href="https://wa.me/5531995891492" target="_blank">
                        <button type="button" class="mt-3 btn btn-primary">Contact me</button>
                    </a>
            </article>
        </section>
    </main>    