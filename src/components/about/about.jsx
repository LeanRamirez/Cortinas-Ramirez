import style from "./about.module.css"



const About =()=>{
    return(
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.parrafo}>
                    <h1 className={style.titulo}>Sobre nosotros</h1>
                    <p className={style.parrafo}>Somos una empresa familiar, con veinte años de trayectoria en el mercado.<br/>
                    Que trabaja con calidad y compromiso en cada uno de los proyectos realizados.<br/>
                    Siempre usando materiales de primera calidad. Pensando en la satisfacción de nuestos clientes.<br/> 
                    Estamos en condiciones de suministrar productos no solo en la provincia de Corrientes, sino en todo el pais.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;


