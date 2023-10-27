import React from 'react'
import styles from './Asesoria.modules.css'

const Asesoria = ({txt}) => {
  return (
    <div className='asesoria-wrapper'>
      <div className='asesoria-subwrapper'>
        <div className='title'><p>{txt.Asesoria[0]}</p></div>
        <div className='subtitle'><p>{txt.Asesoria[1]}</p></div>
        <div className='inputCont'>
            <input id='aseso-name' placeholder={txt.Asesoria[2]}></input>
            <input id='aseso-phone' placeholder={txt.Asesoria[3]}></input>
        </div>
        <div className='btnCont'><p>{txt.Asesoria[4]}</p></div>
      </div>
    </div>
  )
}

export default Asesoria