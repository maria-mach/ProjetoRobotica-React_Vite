import React from 'react'
// import Navbar from '../Components/Navbar'
import ImagemTcc from '../Components/ImagemTcc'
import Explicacao from '../Components/Explicacao'
import ImgCanto from '../Components/ImgCanto'
import Navbar from '../Components/Navbar'


const Lance = () => {
  return (
    <>
      <Navbar/>
      <main className='container'>
        <ImagemTcc/>
        <Explicacao/>
      </main>
      <ImgCanto/>
    </>
  )
}

export default Lance