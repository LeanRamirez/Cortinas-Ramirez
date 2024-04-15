import React from "react"
import About from '../about/about.jsx';
import style from "./carrusel.module.css"

import IMG4 from "../../assets/IMG4.jpg";
import IMG5 from "../../assets/IMG5.jpg";
import IMG6 from "../../assets/IMG6.jpg"

const Carrusel=()=>{
    return(
        <div>
            <div className={style.info}>
                <h1>Cortinas Metalicas Ramirez</h1>
                <h3>TE OFRECEMOS</h3>
                <p>Todo lo relacionado a cortinas metalicas, realizamos instalaciones, reparaciones, asesoramiento y tenemos servicio de urgencia las 24 horas. Nos preocupa su negocio, por lo que antes de que usted realice cualquier tipo de compra, hacemos una evaluacion de sus necesidades sin costo y le recomendaremos lo mejor que le convenga. Nuestra principal meta, es la satisfaccion de nuestros clientes, por lo cual brindamos un amplio asesoramiento personalizado pre y post venta, ofeciendo un resultado optimo con equipos de primera</p>
            </div>
            
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="container carousel-inner" >
                <div className="carousel-item active" data-bs-interval="2000">
                <img src={IMG5}  className={style.img} alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={IMG4}  className={style.img} alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <img src={IMG6}  className={style.img} alt="..."/>
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