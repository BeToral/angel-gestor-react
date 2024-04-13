import React from 'react'
import { useEffect, useState } from 'react'
import styles from './Tramites.modules.css'
import TramitesInfo from '../TramiteInfo/TramitesInfo'
import TramitesData from '../../json/infoTxt.json'
import { Permisos, Placas, Reemplaque, Cita, Multas, Hologramas} from '../../icons/tramites'
import { Arrow, WhatsApp } from '../../icons/Icons'

const TramitesEspeciales = () => {

  const [tramitesEsp,] = useState(TramitesData.TramitesEspeciales);
  const [tramiteEspIcons,] = useState({
    Permisos: <Permisos fill={"#FFFFFF"} />,
    Placas: <Placas fill={"#FFFFFF"} />,
    Reemplacamiento: <Reemplaque fill={"#FFFFFF"} />,
    Citas: <Cita fill={"#FFFFFF"} />,
    MultasInfo: <Multas fill={"#FFFFFF"} />,
    Holograma: <Hologramas fill={"#FFFFFF"} />
  })
  const [selectedEsp, setSelectedEsp] = useState(0);
  const [selectedTramiteEsp, setSelectedTramiteEsp] = useState(Object.keys(tramitesEsp)[selectedEsp]);
  const [selectedSubtramiteEsp, setSelectedSubtramiteEsp] = useState(null);

  const handleTramiteClick = (tramiteCategory, index) => {
    setSelectedEsp(index);
    setSelectedTramiteEsp(tramiteCategory);
    setSelectedSubtramiteEsp(null)
    document.querySelector(".tramites-esp-cont").style.display="flex"

    if ( Object.keys(tramitesEsp[tramiteCategory]).length <= 2 ) {
      
      const keys = Object.keys(tramitesEsp[tramiteCategory]);
      const filteredKeys = keys.filter(key => key !== "TramiteTitle");
      let directSubTramite = null;

      filteredKeys.forEach(key => {
          if (key !== "TramiteTitle") {
              directSubTramite = key;
          }
      });
      handleSubtramiteClick(directSubTramite)
    }
  };
  
  const handleSubtramiteClick = (subtramite) => {
    document.querySelector(".tramites-esp-cont").style.display="none"
    document.querySelector(".tramites-esp-detail").style.display="flex"
    setSelectedSubtramiteEsp(subtramite);

  };

  const backtoSubTramites = ()=>{
    document.querySelector(".tramites-esp-cont").style.display="flex"
    document.querySelector(".tramites-esp-detail").style.display="none"
  }

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


  useEffect(() => {

    // console.log('Selected Tramite:', selectedTramiteEsp);
    // console.log('Selected Index:', selectedEsp);
    // console.log('Selected Tramite Data:', tramitesEsp[selectedTramiteEsp]); // Log the data for the selected tramite
    // console.log('Icon Tramite Data:', tramiteEspIcons[selectedTramiteEsp]);
    return () => {

    }
  }, [selectedTramiteEsp, selectedEsp])

  // console.log('Tramites:', tramitesEsp);


  return (
    <div id="tramites-esp-wrapper" className='tramites-esp-wrapper'>

      <div className='tramites-esp-list'>

        {Object.keys(tramitesEsp).map((tramiteCategory, index) => (
          <div
            key={index}
            className={` ${selectedTramiteEsp === tramiteCategory ? 'selected-tramite' : ''}`}
            onClick={() => handleTramiteClick(tramiteCategory, index)}
          ><p>{tramitesEsp[tramiteCategory].TramiteTitle}</p></div>
        ))}

      </div>

      <div className='tramites-esp-cont'>
        {/* Check if tramites[selectedTramite] exists before accessing its properties */}
        {tramitesEsp[selectedTramiteEsp] && (
          <>

            <div className='tramites-esp-icon'>
              {tramiteEspIcons[selectedTramiteEsp]}
              <p>{tramitesEsp[selectedTramiteEsp].TramiteTitle}</p>
            </div>

            {Object.keys(tramitesEsp[selectedTramiteEsp]).map((subtramite, index) => (
              // Check if subtramite is an object before rendering
              typeof tramitesEsp[selectedTramiteEsp][subtramite] === 'object' &&
              <div
                key={index}
                className="subtramite"
                style={{ backgroundImage: `url(${tramitesEsp[selectedTramiteEsp][subtramite].bgSquare})` }}
                onClick={() => handleSubtramiteClick(subtramite)}>
                <p>{tramitesEsp[selectedTramiteEsp][subtramite].Titulo}</p>
              </div>
            ))}
          </>
        )}
      </div>

      <div className='tramites-esp-detail'
        style={{ display: selectedSubtramiteEsp ? 'flex' : 'none' }}>

        {selectedSubtramiteEsp !== null && (
          <>
            <div className='tramite-header' style={{ backgroundImage: `url(${tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].bgBig})` }}>

              <div className='tramite-header-primary'>

                <div className='tramite-icon'>

                  {tramiteEspIcons[selectedTramiteEsp]}
                  <p>{tramitesEsp[selectedTramiteEsp].TramiteTitle}</p>

                </div>

              </div>

              <div className='tramite-header-secondary'>

                <div className='tramite-titulo'>

                  <h2>
                    <span onClick={() => backtoSubTramites()}>{tramitesEsp[selectedTramiteEsp].TramiteTitle} </span> 
                    / {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Titulo}
                  </h2>

                </div>

                <div className='tramite-descripcion' dangerouslySetInnerHTML=
                
                  {{ __html: tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Descripción }}/>


              </div>


            </div>


            {/* Render Requisitos */}

            <div className='tramite-lists-container'>

              <div className='tramite-list'>
                {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos &&
                  <>
                    <h3>REQUISITOS:</h3>
                    <ul>
                      {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos.PersonaFisica.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                  </>
                }
                {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos && tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos.Adicional &&
                  <>
                    <h3>ADICIONAL PARA PERSONA MORAL:</h3>
                    <ul>
                      {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos.Incluye.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                }
              </div>

              <div className='tramite-list'>
                {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos &&
                  <>
                    <h3>INCLUYE:</h3>
                    <ul>
                      {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos.Incluye.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                  </>
                }
              </div>

            </div>

            {/* Render Pasos */}

            <div className='tramite-pasos'>
              {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos &&
                <>
                  <h3>PASOS A SEGUIR:</h3>
                  <ul>
                    {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos.Pasos.map((item, index) => (
                      <li key={index}><span>{index + 1}--</span>{item}</li>
                    ))}
                  </ul>

                </>
              }
            </div>

            {/* Render Disclaimer */}

            {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Disclaimer !== false && (

              <div className='tramite-disclaimer' dangerouslySetInnerHTML={{ __html: tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Disclaimer }} />

            )}

            {tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos.EnCuenta !== false && (

            <div className='tramite-disclaimer' dangerouslySetInnerHTML={{ __html: tramitesEsp[selectedTramiteEsp][selectedSubtramiteEsp].Requisitos.EnCuenta }} />

            )}

            <div className='tramite-factura-disclaimer'><h2>* Si requieres factura, podemos facturar nuestros servicios.</h2></div>



            <div className='tramite-foot-cont'>
              <div className='tramite-foot-back' onClick={()=>{backtoSubTramites(); scrollToSection('tramites-esp-wrapper')}}>
                <Arrow fill={"#FFFFFF"}/>
              </div>

              <a className='tramite-foot-whats' href="https://api.whatsapp.com/send?phone=525527079944" target="_blank">
                <WhatsApp fill={"#FFFFFF"} />
                <p>Me interesa este servicio</p>
              </a>

            </div>

          </>
        )}

      </div>

    </div>
  )
}

export default TramitesEspeciales