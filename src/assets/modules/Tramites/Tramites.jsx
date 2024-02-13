import React from 'react'
import { useEffect, useState } from 'react'
import styles from './Tramites.modules.css'
import TramitesInfo from '../TramiteInfo/TramitesInfo'
import TramitesData from '../../json/infoTxt.json'
import { Altas, Bajas, CambioPropietario, Comprobantes, TarjetaCirculacion, Verificacion } from '../../icons/tramites'

const Tramites = () => {

  const [tramites,] = useState(TramitesData.Tramites);
  const [tramiteIcons,] = useState({
    Altas: <Altas fill={"#FFFFFF"}/>,
    Bajas: <Bajas fill={"#FFFFFF"}/>,
    CambioPropietario: <CambioPropietario fill={"#FFFFFF"}/>,
    Comprobantes: <Comprobantes fill={"#FFFFFF"}/>,
    TarjetaCirculacion: <TarjetaCirculacion fill={"#FFFFFF"}/>,
    Verificacion: <Verificacion fill={"#FFFFFF"}/>
  })
  const [selected, setSelected] = useState(0);
  const [selectedTramite, setSelectedTramite] = useState(Object.keys(tramites)[selected]);
  const [selectedSubtramite, setSelectedSubtramite] = useState(null);

  const handleTramiteClick = (tramiteCategory, index) => {
    setSelected(index);
    setSelectedTramite(tramiteCategory);
    setSelectedSubtramite(null)
  };

  const handleSubtramiteClick = (subtramite) => {
    setSelectedSubtramite(subtramite);
  };

  useEffect(() => {

    console.log('Selected Tramite:', selectedTramite);
    console.log('Selected Index:', selected);
    console.log('Selected Tramite Data:', tramites[selectedTramite]); // Log the data for the selected tramite
    console.log('Icon Tramite Data:', tramiteIcons[ selectedTramite ] );
    return () => {

    }
  }, [selectedTramite, selected])

  console.log('Tramites:', tramites);


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
          <div className='tramite-header'>

            <div className='tramite-header-primary'>

              <div className='tramite-icon'>

                {tramiteIcons[selectedTramite]} 
                <p>{tramites[selectedTramite].TramiteTitle}</p>

              </div>

            </div>
            
            <div className='tramite-header-secondary'>

              <div className='tramite-titulo'>
              
                <h2>{tramites[selectedTramite][selectedSubtramite].Titulo}</h2>
              </div>

              <div className='tramite-descripcion' dangerouslySetInnerHTML=
              {{ __html: tramites[selectedTramite][selectedSubtramite].Descripción }} />


            </div>


          </div>

          
            {/* Render Requisitos */}

          <div className='tramite-lists-container'>

            <div className='tramite-list'>
                {tramites[selectedTramite][selectedSubtramite].Requisitos &&
                  <>
                    <h3>Requisitos:</h3>
                    <ul>
                      {tramites[selectedTramite][selectedSubtramite].Requisitos.PersonaFisica.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    
                  </>
                }
            </div>

            <div className='tramite-list'>
                {tramites[selectedTramite][selectedSubtramite].Requisitos &&
                  <>
                    <h3>Incluye:</h3>
                    <ul>
                      {tramites[selectedTramite][selectedSubtramite].Requisitos.Incluye.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    
                  </>
                }
            </div>

          </div>

          {/* Render Pasos */}

                

          {/* Render Disclaimer */}

          <div className='tramite-disclaimer' dangerouslySetInnerHTML={{ __html: tramites[selectedTramite][selectedSubtramite].Disclaimer}}/>

          <div><h2>* Si requieres factura, podemos facturar nuestros servicios.</h2></div>

          <div>
            <div></div>
            <div></div>
          </div>

          </>
        )}

      </div>

    </div>
  )
}

export default Tramites