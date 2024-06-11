import React from 'react'
import { useEffect, useState } from 'react'
import { WhatsApp } from '../../icons/Icons'
import styles from './MenuMobile.modules.css'

const MenuMobile = ({ isMobileMenuOpen, toggleMobileMenu }) => {

const scrollToSection = (sectionId) => {

    toggleMobileMenu()

    const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return(
    <div id='menu-mob-wrapper' className={isMobileMenuOpen ? 'open' : ''}>

        <div className="menu-mob-subwrapper">

            <div className='menu-mob-nav'onClick={() => scrollToSection('tramites-wrapper')}>
                <p>TRÁMITES</p>
            </div>
            <div className='menu-mob-nav' onClick={() => scrollToSection('cita-wrapper')}>
                <p>CITA DE VERIFICACIÓN</p>
            </div>
            <div className='menu-mob-nav' onClick={() => scrollToSection('us')}>
                <p>NOSOTROS</p>
            </div>
            <div className='menu-mob-nav' onClick={() => scrollToSection('contacto-wrapper')}>
                <p>CONTACTO</p>
            </div>

            <a className="wasa-mob" href="https://api.whatsapp.com/send?phone=525527079944" target="_blank">
              <WhatsApp fill={"#8EA7E9"} />
            </a>

        </div>
        
    </div>
  )
}

export default MenuMobile