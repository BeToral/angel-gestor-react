import React from 'react'
import { useEffect, useState } from 'react'
import { Isotipo, Isologo } from '../../icons/Logos'
import styles from './Nav.modules.css'

const Nav = () => {

  // State to track screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Event listener to handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };


  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div id='nav-wrapper'>

      <Isologo />

      {isMobile ?(
         // Render mobile navigation (hamburger menu)
        <div className="mobile-nav">
         
          <div className="burger">

            <div></div>
            <div></div>
            <div></div>

          </div>

        </div>

      ): (
        // Render desktop navigation
        <div className="navBar">

          <div><p>TRÁMITES</p></div>
          <div><p>CITA DE VERIFICACIÓN</p></div>
          <div><p>NOSOTROS</p></div>
          <div><p>CONTACTO</p></div>

        </div>
      )}

    </div>


  )
}

export default Nav