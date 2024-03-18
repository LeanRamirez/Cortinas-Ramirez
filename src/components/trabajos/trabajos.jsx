import  "./trabajos.css"
import IMG3 from "../../assets/img3.jpg"
import IMG4 from "../../assets/IMG4.jpg"
import IMG5 from "../../assets/IMG5.jpg"
import IMG6 from "../../assets/IMG6.jpg"




const  Trabajos = ()=>{
    return(
        <div>
            <div className="container-fluid">
                <h1>Servicios</h1>
                <p> Brindamos asesoramiento acerca de la mejor opcion para el cliente.<br/>
                    Realizamos cotización sin cargo, contamos con una basta experiencia en el rubro siendo fabricantes
                    
                </p>
            </div>
                
            <div className="trabajos">
                <img src={IMG3} alt="img3"/>
                <img src={IMG4} alt="IMG9"/>
                <img src={IMG5} alt="IMG12"/>
                <img src={IMG6} alt="IMG13"/>
            </div>
            
            
        </div>
    )
}

export default Trabajos;