import React,{useEffect, useState} from 'react'
import styles from './Cita.modules.css'
import Calendar from '../../img/calendar.png'

const Cita = ({txt}) => {

  useEffect(() => {
   
    
  }, []);


  return (
    <div className='cita-wrapper'>

      <div className='cita-title'><p>{txt.title}</p></div>

    </div>
  )
}

export default Cita