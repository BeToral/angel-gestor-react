import React from 'react'
import { useEffect, useState } from 'react'
import { Isotipo, Isologo } from '../../icons/Logos'
import { WhatsApp } from '../../icons/Icons'
import styles from './Nav.modules.css'

const Nav = ({ isMobileMenuOpen, setIsMobileMenuOpen, toggleMobileMenu }) => {

  // State to track screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isWasaVisible, setIsWasaVisible] = useState(false);

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
  }, [isMobile]);


  useEffect(() => {
    const handleScroll = () => {
      const asesorWrapper = document.querySelector('.asesoria-wrapper');
      const asesorRect = asesorWrapper.getBoundingClientRect().bottom;
      
      if ( asesorRect > 0 ) {
        setIsWasaVisible( false );
      }else{
        setIsWasaVisible( true );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.getElementById('nav-wrapper').offsetHeight;

    if (section && navbarHeight) {
        const offset = navbarHeight;
        const sectionPosition = section.getBoundingClientRect().top;
        
        window.scrollTo({
            top: sectionPosition + window.pageYOffset - offset,
            behavior: 'smooth'
        });
        
    }
}

  return (

    <div id='nav-wrapper'>

      <div className="isologo" onClick={() => scrollToSection('hero-wrapper')}>
        <Isologo  />
      </div>

      {isMobile ?(
         // Render mobile navigation (hamburger menu)
        <div id='mobile-nav' className="mobile-nav" 
        onClick={() =>{ setIsMobileMenuOpen(!isMobileMenuOpen); toggleMobileMenu();}}>
         
          {isWasaVisible && !isMobileMenuOpen && (
            <a className="wasa-mob" href="https://api.whatsapp.com/send?phone=525527079944" target="_blank">
              <WhatsApp fill={"#8EA7E9"} />
            </a>
          )}


          <div className={`burger ${isMobileMenuOpen ? 'burger-open' : ''}`}>

            <div></div>
            <div></div>
            <div></div>

          </div>

        </div>

      ): (
        // Render desktop navigation
        <div className="navBar">

          <div onClick={() => scrollToSection('tramites-wrapper')}><p>TRÁMITES</p></div>
          <div onClick={() => scrollToSection('cita-wrapper')}><p>CITA DE VERIFICACIÓN</p></div>
          <div onClick={() => scrollToSection('us')}><p>NOSOTROS</p></div>
          <div onClick={() => scrollToSection('contacto-wrapper')}><p>CONTACTO</p></div>
          {isWasaVisible && (
            <a className="wasa-mob" href="https://api.whatsapp.com/send?phone=525527079944" target="_blank">
              <WhatsApp fill={"#8EA7E9"} />
            </a>
          )}

        </div>
        
      )}

    </div>


  )
}

export default Nav