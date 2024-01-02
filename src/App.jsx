import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/modules/Nav'
import MenuMobile from './assets/modules/MenuMobile'
import Hero from './assets/modules/Hero'
import Asesoria from './assets/modules/Asesoria'
import Tramites from './assets/modules/Tramites'
import QuienesSomos from './assets/modules/QuienesSomos'
import PorQueNosotros from './assets/modules/PorQueNosotros'
import Contacto from './assets/modules/Contacto'
import Footer from './assets/modules/Footer/Footer'
import AppTxt from './assets/json/infoTxt.json'

function App() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <div id='agn-wrapper'>

      <Nav isMobileMenuOpen={isMobileMenuOpen} 
      setIsMobileMenuOpen={setIsMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}/>
      <MenuMobile isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}/>
      <Hero />
      <Asesoria txt={AppTxt.Asesoria}/>
      <Tramites />
      <div id='us'>
        <QuienesSomos txt={AppTxt.Nosotros}/>
        <PorQueNosotros txt={AppTxt.Porque}/>
      </div>
      <Contacto id='contacto'/>
      <Footer/>

    </div>
  )
}

export default App
