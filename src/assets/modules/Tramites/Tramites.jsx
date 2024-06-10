import React from 'react'
import { useEffect, useState } from 'react'
import styles from './Tramites.modules.css'
import TramitesInfo from '../TramiteInfo/TramitesInfo'
import TramitesData from '../../json/infoTxt.json'
import { Altas, Bajas, CambioPropietario, Comprobantes, TarjetaCirculacion, Verificacion } from '../../icons/tramites'
import { Arrow, WhatsApp } from '../../icons/Icons'

const Tramites = () => {

  const [tramites,] = useState(TramitesData.Tramites);
  const [tramiteIcons,] = useState({
    Altas: <Altas fill={"#FFFFFF"} />,
    Bajas: <Bajas fill={"#FFFFFF"} />,
    CambioPropietario: <CambioPropietario fill={"#FFFFFF"} />,
    Comprobantes: <Comprobantes fill={"#FFFFFF"} />,
    TarjetaCirculacion: <TarjetaCirculacion fill={"#FFFFFF"} />,
    Verificacion: <Verificacion fill={"#FFFFFF"} />
  })
  const [selected, setSelected] = useState(0);
  const [selectedTramite, setSelectedTramite] = useState(Object.keys(tramites)[selected]);
  const [selectedSubtramite, setSelectedSubtramite] = useState(null);

  const handleTramiteClick = (tramiteCategory, index) => {
    setSelected(index);
    setSelectedTramite(tramiteCategory);
    setSelectedSubtramite(null)
    document.querySelector(".tramites-cont").style.display="flex"

    if ( Object.keys(tramites[tramiteCategory]).length <= 2 ) {
      
      const keys = Object.keys(tramites[tramiteCategory]);
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
    document.querySelector(".tramites-cont").style.display="none"
    document.querySelector(".tramites-detail").style.display="flex"
    setSelectedSubtramite(subtramite);

  };

  const backtoSubTramites = ()=>{
    document.querySelector(".tramites-cont").style.display="flex"
    document.querySelector(".tramites-detail").style.display="none"
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

    // console.log('Selected Tramite:', selectedTramite);
    // console.log('Selected Index:', selected);
    // console.log('Selected Tramite Data:', tramites[selectedTramite]); 
    // console.log('Icon Tramite Data:', tramiteIcons[selectedTramite]);
    return () => {

    }
  }, [selectedTramite, selected])

  // console.log('Tramites:', tramites);


  return (
    <div id="tramites-wrapper" className='tramites-wrapper'>

      <div className='tramites-list'>

        {Object.keys(tramites).map((tramiteCategory, index) => (
          <div
            key={index}
            className={` ${selectedTramite === tramiteCategory ? 'selected-tramite' : ''}`}
            onClick={() => handleTramiteClick(tramiteCategory, index)}
          ><p>{tramites[tramiteCategory].TramiteTitle}</p></div>
        ))}

      </div>

      <div className='tramites-cont'>
        {/* Check if tramites[selectedTramite] exists before accessing its properties */}
        {tramites[selectedTramite] && (
          <>

            <div className='tramites-icon'>
              {tramiteIcons[selectedTramite]}
              <p>{tramites[selectedTramite].TramiteTitle}</p>
            </div>

            {Object.keys(tramites[selectedTramite]).map((subtramite, index) => (
              // Check if subtramite is an object before rendering
              typeof tramites[selectedTramite][subtramite] === 'object' &&
              <div
                key={index}
                className="subtramite"
                style={{ backgroundImage: `url(${tramites[selectedTramite][subtramite].bgSquare})` }}
                onClick={() => handleSubtramiteClick(subtramite)}>
                <p>{tramites[selectedTramite][subtramite].Titulo}</p>
              </div>
            ))}
          </>
        )}
      </div>

      <div className='tramites-detail'
        style={{ display: selectedSubtramite ? 'flex' : 'none' }}>

        {selectedSubtramite !== null && (
          <>
            <div className='tramite-header' style={{ backgroundImage: `url(${tramites[selectedTramite][selectedSubtramite].bgBig})` }}>

              <div className='tramite-header-primary'>

                <div className='tramite-icon'>

                  {tramiteIcons[selectedTramite]}
                  <p>{tramites[selectedTramite].TramiteTitle}</p>

                </div>

              </div>

              <div className='tramite-header-secondary'>

                <div className='tramite-titulo'>

                  <h2>
                    <span onClick={() => backtoSubTramites()}>{tramites[selectedTramite].TramiteTitle} </span> 
                    / {tramites[selectedTramite][selectedSubtramite].Titulo}
                  </h2>

                </div>

                <div className='tramite-descripcion' dangerouslySetInnerHTML=
                
                  {{ __html: tramites[selectedTramite][selectedSubtramite].Descripción }}/>


              </div>


            </div>


            {/* Render Requisitos */}

            <div className='tramite-lists-container'>

              <div className='tramite-list'>
                {tramites[selectedTramite][selectedSubtramite].Requisitos &&
                  <>
                    <h3>REQUISITOS:</h3>
                    <ul>
                      {tramites[selectedTramite][selectedSubtramite].Requisitos.PersonaFisica.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>

                  </>
                }
                {tramites[selectedTramite][selectedSubtramite].Requisitos && tramites[selectedTramite][selectedSubtramite].Requisitos.Adicional &&
                  <>
                    <h3>ADICIONAL PARA PERSONA MORAL:</h3>
                    <ul>
                      {tramites[selectedTramite][selectedSubtramite].Requisitos.Incluye.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>
                  </>
                }
              </div>

              <div className='tramite-list'>
                {tramites[selectedTramite][selectedSubtramite].Requisitos &&
                  <>
                    <h3>INCLUYE:</h3>
                    <ul>
                      {tramites[selectedTramite][selectedSubtramite].Requisitos.Incluye.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                      ))}
                    </ul>

                  </>
                }
              </div>

            </div>

            {/* Render Pasos */}

            <div className='tramite-pasos'>
              {tramites[selectedTramite][selectedSubtramite].Requisitos &&
                <>
                  <h3>PASOS A SEGUIR:</h3>
                  <ul>
                    {tramites[selectedTramite][selectedSubtramite].Requisitos.Pasos.map((item, index) => (
                      <li key={index}><span>{index + 1}--</span>{item}</li>
                    ))}
                  </ul>

                </>
              }
            </div>

            {/* Render Disclaimer */}

            {tramites[selectedTramite][selectedSubtramite].Disclaimer !== false && (

              <div className='tramite-disclaimer' dangerouslySetInnerHTML={{ __html: tramites[selectedTramite][selectedSubtramite].Disclaimer }} />

            )}

            {tramites[selectedTramite][selectedSubtramite].Requisitos.EnCuenta !== false && (

            <div className='tramite-disclaimer' dangerouslySetInnerHTML={{ __html: tramites[selectedTramite][selectedSubtramite].Requisitos.EnCuenta }} />

            )}

            <div className='tramite-factura-disclaimer'><h2>* Si requieres factura, podemos facturar nuestros servicios.</h2></div>



            <div className='tramite-foot-cont'>
              <div className='tramite-foot-back' onClick={()=>{backtoSubTramites(); scrollToSection('tramites-wrapper')}}>
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

export default Tramites