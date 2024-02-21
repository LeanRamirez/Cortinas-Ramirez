import React from "react"
import About from '../about/about.jsx';
import "./carrusel.css"
import IMG3 from "../../assets/IMG3.jpg";
import IMG4 from "../../assets/IMG4.jpg";
import IMG5 from "../../assets/IMG5.jpg";
import IMG6 from "../../assets/IMG6.jpg"

const Carrusel=()=>{
    return(
        <div className="container">
            <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={IMG6} className="d-flex w-100" alt="IMG3"/>
            </div>
            <div className="carousel-item">
                <img src={IMG4} className="d-block w-100" alt="IMG4"/>
            </div>
                <div className="carousel-item">
                    <img src={IMG5} className="d-block w-100" alt="IMG5"/>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <About/>
            </div>
            
        </div>
    )
}

export default Carrusel