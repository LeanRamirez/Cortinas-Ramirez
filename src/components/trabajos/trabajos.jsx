import  style from"./trabajos.module.css"
import IMG3 from "../../assets/img3.jpg"
import IMG7 from "../../assets/IMG7.jpg"
import IMG5 from "../../assets/IMG5.jpg"
import IMG6 from "../../assets/IMG6.jpg"




const  Trabajos = ()=>{
    return(
        <div className="container-fluid">
            <div className={style.servicios}>
                <h1>Servicios</h1>
                <p> Brindamos asesoramiento acerca de la mejor opcion para el cliente.<br/>
                    Realizamos cotización sin cargo, contamos con una basta experiencia en el rubro siendo fabricantes.<br/>
                    Se realizan trabajos de mantenimiento y en horarios especiales de acuerdo con las exigencias de las grandes empresas que contratan nuestros servicios.
                </p>
            </div>
                
            <div className={`row ${style.trabajos}`}>
                <div className={`col-md-3 ${style.card}`}>
                    <h4>Fabricación</h4>
                    <p>Fabricamos desde pequeños cerramientos hasta infraestructuras industriales</p><br/>
                    <img src={IMG6} alt="img3"/>
                </div>
                <div className={`col-md-3 ${style.card}`}>
                    <h4>Automatización</h4>
                    <p>Poseemos toda clase de sistemas de automatización y motorización de cortinas metalicas</p>
                    <img src={IMG7} alt="IMG9"/>
                </div>
                {/* <div className={`col-md-3 ${style.card}`}>
                    <h4>Instalación</h4>
                    <p>Realizamos instalación de todo tipo de cortinas metalicas, ciegas, microperforadas, etc</p>
                    <img src={IMG5} alt="IMG12"/>
                </div> */}
                <div className={`col-md-3 ${style.card}`}>
                    <h4>Reparaciones</h4>
                    <p>Servicio de reparaciones en el acto, por falla de motor, cortina trabada entre otros.</p><br/>
                    <img src={IMG3} alt="IMG13"/>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Trabajos;