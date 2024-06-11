import React, { useState } from 'react'
import styles from './Cita.modules.css'
import calendar from '../../img/calendar.png'
import calendarmob from '../../img/calendar-mob.png'

const Cita = ({ txt }) => {

  const [citaTxt,] = useState(txt.list);

  return (
    <div id='cita-wrapper' className='cita-wrapper'>

      <div className='cita-title'><p>{txt.title}</p></div>
      <img className='calendar-desk' src={calendar} />
      <img className='calendar-mob' src={calendarmob} />

      {citaTxt !== undefined && (

        <>
          <ul className='cita-list'>
            {citaTxt.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>

        </>

      )}

    </div>
  )
}

export default Cita