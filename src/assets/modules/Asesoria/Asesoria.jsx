import React, {useState} from 'react'
import styles from './Asesoria.modules.css'

const Asesoria = ({txt}) => {

  const [isNameValid, setIsNameValid] = useState(false);
  const [clientName, setClientName] = useState('');

  const btnCont = 'btnCont';
  const locked = 'locked';

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]{3,}$/;

    
    setIsNameValid(nameRegex.test(inputValue));
    
    // Get the btnCont element and toggle the locked class based on validation result
    const btnContElement = document.querySelector(`.${btnCont}`);
    if (btnContElement) {
      if (nameRegex.test(inputValue)) {
        btnContElement.classList.remove(locked);
        setClientName(inputValue);
        console.log(clientName);
      } else {
        btnContElement.classList.add(locked);
        setClientName('');
      }
    }
  };
  
  return (
    <div className='asesoria-wrapper'>
      <div className='asesoria-subwrapper'>
        <div className='title'><p>{txt[0]}</p></div>
        <div className='subtitle'><p>{txt[1]}</p></div>
        <div className='inputCont'>
            <input id='aseso-name' placeholder={txt[2]} onChange={handleInputChange}></input>
        </div>
        <a href="https://api.whatsapp.com/send?phone=525527079944" target="_blank" className={`${btnCont} ${locked}`}>
          <p>{txt[4]}</p>
        </a>
      </div>
    </div>
  )
}

export default Asesoria