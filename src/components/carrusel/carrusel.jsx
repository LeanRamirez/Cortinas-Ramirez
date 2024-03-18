import React from "react"
import About from '../about/about.jsx';
import "./carrusel.css"

import IMG4 from "../../assets/IMG4.jpg";
import IMG5 from "../../assets/IMG5.jpg";
import IMG6 from "../../assets/IMG6.jpg"

const Carrusel=()=>{
    return(
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="container carousel-inner" >
                <div className="carousel-item active" data-bs-interval="2000">
                <img src={IMG5}  className="d-block " alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={IMG4}  className="d-block " alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={IMG6}  className="d-block " alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>    
    )
}


export default Carrusel