import React,{useEffect, useState} from 'react'
import { Piggy, Quick, Mexico, Mail, Handling } from '../../icons/Icons'
import styles from './PorQue.modules.css'

const PorQueNosotros = ({txt}) => {

  const [selectedIconIndex, setSelectedIconIndex] = useState(0);

  const valueIcons = [<Piggy />, <Quick />, <Mexico />, <Mail />, <Handling />];


  useEffect(() => {
   
    
  }, [selectedIconIndex]);


  return (
    <div className='porque-wrapper'>

      <div className='porque-title'><p>{txt.title}</p></div>
      
      <div className='values-cont'>

      <div className="values">
          {valueIcons.map((icon, index) => (
            <div
              key={index}
              onClick={() => setSelectedIconIndex(index)}
              className={`valueIcon ${index === selectedIconIndex ? 'selected' : ''}`}
            >
              {icon}
              <div></div>
            </div>
          ))}
        </div>

          <div className='values-txt'>
            <p>
              {txt.values[selectedIconIndex]}
              </p>
          </div>

      </div>

      <div className='disclaimer'>
        <div></div>
        <p>{txt.disclaimer}</p>
      </div>

    </div>
  )
}

export default PorQueNosotros