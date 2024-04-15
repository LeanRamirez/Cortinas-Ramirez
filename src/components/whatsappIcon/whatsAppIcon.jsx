import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import style from './whatsAppIcon.module.css'

const WhatsAppIcon = ()=>{

    const numeroTelefono = '3794205998';

    const handleWhatsAppClick= ()=>{
        const WhatsAppLink = `https://api.whatsapp.com/send?phone=${numeroTelefono}`;

        window.open(WhatsAppLink, '_blank')
    }
    
    return(
        <div>
            <a href="#" onClick={handleWhatsAppClick}>
                <FontAwesomeIcon icon={faWhatsapp} className={style.icon}/> 
            </a>
        </div>
    )
}

export default WhatsAppIcon;