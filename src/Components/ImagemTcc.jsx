import React from 'react'
import TCC from '../Imagens/TCC.jpg'
import '../Styles/Lancamento.css'

const ImagemTcc = () => {
  return (
    <div className='Imagem-Header'>
        <div className="Texto-lancamento">
            <h2>Lançamento</h2>
        </div>
        <div className="imagem-destaque">
            <img src={TCC} alt="Protótipo do TCC" />
        </div>
    </div>
  )
}

export default ImagemTcc