import React, { useEffect, useState } from 'react'

import appText from '../../json/infoTxt.json'

import Slide from '../../components/Slide'
import Bullet from '../../components/Bullet/Bullet'
import slideTxtA from '../../img/hero/sliderA-txt.svg'
import slideTxtB from '../../img/hero/sliderB-txt.svg'
import bwmBlack from '../../img/hero/bmw.png'
import audiWhite from '../../img/hero/audi.png'
import bgA from '../../img/hero/heroBgA.jpg'
import timer from '../../img/hero/timer.svg'

import styles from './Hero.modules.css'

const Hero=()=> {

  const [slide, setSlide] = useState({

    slideA:{
      _message: slideTxtA,
      _icon: timer,
      _wasa: appText.Hero[3],
      _image: bwmBlack,
      _bg: bgA
    },
    slideB:{
      _message: slideTxtB,
      _icon: timer,
      _wasa: appText.Hero[3],
      _image: audiWhite,
      _bg: bgA 
    }

  })

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % Object.keys(slide).length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='hero-wrapper'>

      <div id='hero-subwrapper' 
      style={{ '--slide-translate': `calc(-${counter * (100 / Object.keys(slide).length)}%)` }}>

        {Object.values(slide).map((slideData) => (
          <Slide
            message={slideData._message}
            icon={slideData._icon}
            wasa={slideData._wasa}
            image={slideData._image}
            bg={slideData._bg}
          />
        ))}

      </div>


      // Inside the rendering of Bullet components in the Hero component
      <div id='bullet-wrapper'>
        {Object.values(slide).map((slideData, index) => (
          <Bullet key={index} active={index === counter} />
        ))}
      </div>

    </div>
  )
}

export default Hero