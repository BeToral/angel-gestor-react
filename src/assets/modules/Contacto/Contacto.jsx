import React from 'react'
import styles from './Contacto.modules.css'
import { MiniMap, MiniCalendar, MiniWhats, MiniMail } from '../../icons/Icons'

const Contacto = () => {
  return (

    <div className='contacto-wrapper'>

      <div className='title'><p>CONTACTO</p></div>

      <div className='contacto'>
        <MiniMap />
        <p>Oriente 162 #335, Moctezuma 2da Secc., CDMX.</p>
      </div>

      <div className='contacto'>
        <MiniCalendar />
        <p><span>Horarios:</span> lunes a domingo 9:00 am a 9:00 pm.</p>
      </div>

      <div className='contacto'>
        <MiniWhats />
        <p><span>Teléfono y WhatsApp:</span> 55 2707 9944</p>
      </div>

      <div className='contacto'>
        <MiniMail />
        <p><span>Correo:</span> adiaz@adagmorelos.com</p>
      </div>

    </div>

  )
}

export default Contacto