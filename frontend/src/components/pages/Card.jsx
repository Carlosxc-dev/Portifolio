import React from "react";
import './css/card.css'

import {TiHtml5} from 'react-icons/ti'
import {DiCss3} from 'react-icons/di'
import {DiSass} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'
import {FaBootstrap} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'


export default props =>
    <>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>HTML5</h3>
                <i > 
                    <TiHtml5 style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Desenvolvendo sites estruturados com tags semanticas para ter uma boa visibilidade nos padors de pesquisa do google.</p>
        </article>
        
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>CSS3</h3>
                <i > 
                    <DiCss3 style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Para uma boa estilizada no seu site com padroes de UI e UX.</p>
        </article>

        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>Sass</h3>
                <i > 
                    <DiSass style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Para simplificar a escrita em CSS</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>Bootstrap5</h3>
                <i > 
                    <FaBootstrap style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Framework para uma maior agilidade no desenvolvimento</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>Git/Github</h3>
                <i > 
                    <BsGithub style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Para um bom versionamento e publicao e do site no github pages</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>React</h3>
                <i > 
                    <DiReact style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Estrutura padronizada dos codigos em js</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>JavaScript</h3>
                <i > 
                    <SiJavascript style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Gerar paginas dinamicas e integradas</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>TypeScript</h3>
                <i > 
                    <SiTypescript style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Adicionar tipagem ao JS para evitar problemas de tipagem nos codigos</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>Python</h3>
                <i > 
                    <FaPython style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Toda a versatilidade da linguagem.</p>
        </article>
    </>