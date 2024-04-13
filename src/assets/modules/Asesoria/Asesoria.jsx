import React from 'react'
import styles from './Asesoria.modules.css'

const Asesoria = ({txt}) => {
  return (
    <div className='asesoria-wrapper'>
      <div className='asesoria-subwrapper'>
        <div className='title'><p>{txt[0]}</p></div>
        <div className='subtitle'><p>{txt[1]}</p></div>
        <div className='inputCont'>
            <input id='aseso-name' placeholder={txt[2]}></input>
        </div>
        <div className='btnCont'><p>{txt[4]}</p></div>
      </div>
    </div>
  )
}

export default Asesoria