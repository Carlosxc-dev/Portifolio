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
            <p className="text-secondary">Developing sites structured with semantic tags to have good visibility in google search standards.</p>
        </article>
        
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>CSS3</h3>
                <i > 
                    <DiCss3 style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">For a good styling on your site with UI and UX patterns.</p>
        </article>

        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>Sass</h3>
                <i > 
                    <DiSass style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">To simplify writing in CSS</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>Bootstrap5</h3>
                <i > 
                    <FaBootstrap style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Framework for greater agility in development</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>Git/Github</h3>
                <i > 
                    <BsGithub style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">For good versioning and publishing of the site on github pages</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>React</h3>
                <i > 
                    <DiReact style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Standard structure of codes in js</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>JavaScript</h3>
                <i > 
                    <SiJavascript style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Generate dynamic and integrated pages</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>TypeScript</h3>
                <i > 
                    <SiTypescript style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">Add typing to JS to avoid typing problems in code</p>
        </article>
        <article className="container text-secondary m-2 rounded-2 card">
            <div className="conteiner-card">
                <h3>Python</h3>
                <i > 
                    <FaPython style={{width: "50px", height: "50px"}}/>
                </i>
            </div>
            <p className="text-secondary">All the versatility of language.</p>
        </article>
    </>