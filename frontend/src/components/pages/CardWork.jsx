import React from "react";
import "./css/CardWork.css"



export default props =>
    <div class="card cardW m-3" style={{width: "18rem"}}>
        <img src={props.img} class="card-img-top m-auto" alt="..."  style={{width: "200px", height: "200px"}}/>
        <div class="card-body">
            <h4 class="card-title">{props.nome}</h4>
            <p class="card-text text-secondary">{props.text}</p>
            <a href= {props.link}  target="_blank"
                class="btn btn-primary">Go somewhere</a>
        </div>
    </div>