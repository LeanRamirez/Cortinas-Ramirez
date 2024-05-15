import React from "react"
import About from '../about/about.jsx';
import style from "./carrusel.module.css"

import IMG4 from "../../assets/IMG4.jpg";
import IMG5 from "../../assets/IMG5.jpg";
import IMG6 from "../../assets/IMG6.jpg"
import { NavLink } from "react-router-dom";

const Carrusel=()=>{
    return(
        <div className={style.carruseContainer}>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className={` carousel-inner ${style.carrusel}`} >
                    <div className={`carousel-item active ${style.carruselItem}`} data-bs-interval="2000">
                        <img src={IMG5}  className={style.img} alt="..."/>
                        <div className={style.overlay}>
                            <p>Fabricamos todos los modelos de cortinas metalicas del mercado. Tablilas galvanizadas ciegas y microperforadas</p>
                            <button className={style.button}>
                                <NavLink className={style.text} to="/contacto"> Conozca mas</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={`carousel-item active ${style.carruselItem}`} data-bs-interval="2000">
                        <img src={IMG4}  className={style.img} alt="..."/>
                        <div className={style.overlay}>
                            <p>Contamos con diferentes productos para brindar acorde a sus necesidades</p>
                            <button className={style.button}>
                                <NavLink className={style.text} to="/trabajos"> Conozca mas</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className={`carousel-item active ${style.carruselItem}`} data-bs-interval="2000">
                        <img src={IMG6}  className={style.img} alt="..."/>
                        <div className={style.overlay}>
                            <p>Nuestros clientes avalan nuestros mas de 20 años de experiencia</p>
                            <button className={style.button}>
                                <NavLink className={style.text} to="/about"> Conozca mas</NavLink>
                            </button>
                        </div>
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