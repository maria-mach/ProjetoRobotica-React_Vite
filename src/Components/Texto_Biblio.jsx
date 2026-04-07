import React from 'react'
import Car from '../Imagens/Car.png'
import '../Styles/Biblio.css'

const Texto_Biblio = () => {
  return (
    <section className='container'>
        <div className='Texto-lancamento'>
          <h2>Bibliografia</h2>
        </div>
        
        <div className='card'>
            <ul className='Lista-vertical'>
                <li>
                    <a href="https://projecthub.arduino.cc/Bcjams/garage-parking-assistant-55c22c" target="_blank" rel="noopener noreferrer">Garage Parking Assistant - Arduino Project Hub</a>
                </li>
                <li>
                    <a href="https://www.instructables.com/Arduino-Parking-Sensor/" target="_blank" rel="noopener noreferrer">Arduino Parking Sensor - Instructables</a>
                </li>
                <li>
                    <a href="https://projecthub.arduino.cc/" target="_blank" rel="noopener noreferrer">Arduino Project Hub</a>
                </li>
                <li>
                    <a href="https://www.instructables.com/" target="_blank" rel="noopener noreferrer">Instructables</a>
                </li>
                <li>
                    <a href="https://www.arduinoecia.com.br/sensor-de-estacionamento-re-com-arduino/" target="_blank" rel="noopener noreferrer">Sensor de Estacionamento com Arduino - Arduino e Cia</a>
                </li>
            </ul>
        </div>
        <div className='Carro-final'>
            <img src={Car} alt="Carro final" />
        </div>
    </section>
  )
}

export default Texto_Biblio