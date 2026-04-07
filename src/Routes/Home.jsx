import React from 'react'

import CentroInicial from '../Components/CentroInicial'
import Propaganda from '../Components/Propaganda'
import LinkTcc from '../Components/LinkTcc'
import Motivos from '../Components/Motivos'
import Rodape from '../Components/Rodape'
import NavBar from '../Components/Navbar'
import ImgCanto from '../Components/ImgCanto'


const Home = () => {
  return (
    <>
      <NavBar/>
      <CentroInicial/>
      <Propaganda/>
      <LinkTcc/>
      <Motivos/>
      <Rodape/>
    </>
  )
}

export default Home