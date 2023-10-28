import React from 'react'
import styles from './Quienes.modules.css'

const QuienesSomos = ({txt}) => {
  return (
    <div className='nosotros-wrapper'>

      <div className='nosotros'>

        <div className='nosotros-title'><p>{txt[0]}</p></div>

        <div className='nosotros-txt'>
          <p>{txt[1]}</p>
          <p>{txt[2]}</p>
          <p>{txt[3]}</p>
        </div>

      </div>

    </div>
  )
}

export default QuienesSomos