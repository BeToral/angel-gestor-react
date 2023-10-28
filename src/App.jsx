import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/modules/Nav'
import Hero from './assets/modules/Hero'
import Asesoria from './assets/modules/Asesoria'
import Tramites from './assets/modules/Tramites'
import QuienesSomos from './assets/modules/QuienesSomos'
import PorQueNosotros from './assets/modules/PorQueNosotros'
import Contacto from './assets/modules/Contacto'
import AppTxt from './assets/json/infoTxt.json'

function App() {
  

  return (
    <div id='agn-wrapper'>

      <Nav />
      <Hero />
      <Asesoria txt={AppTxt.Asesoria}/>
      <Tramites />
      <div id='us'>
        <QuienesSomos txt={AppTxt.Nosotros}/>
        <PorQueNosotros txt={AppTxt.Porque}/>
      </div>
      <Contacto />

    </div>
  )
}

export default App
