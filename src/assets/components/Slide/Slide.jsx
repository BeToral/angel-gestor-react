import React from 'react'
import styles from './Slide.modules.css'
import { WhatsApp } from '../../icons/Icons';


const Slide = ({ message, icon,  wasa, image, bg }) => {

  const slideContBg = {
    backgroundImage: `url(${bg})`
  };

  return (
    <div className="slide-cont" style={slideContBg}>

      <div className="slide-callback">
        <div className="icon"><img src={ icon }/></div>
        <div className="message"><img src={ message }/></div>
        {
          wasa && (
            <div className="wasa"><WhatsApp/><p>{ wasa }</p></div>
          )}
      </div>

      <div className="slide-img"><img src={ image }/></div>

    </div>
  )
}

export default Slide