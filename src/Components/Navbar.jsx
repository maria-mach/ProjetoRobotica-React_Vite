import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Lupa from '../Imagens/Lupa.png'
import { List, X } from "@phosphor-icons/react"
import '../Styles/NavBar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const NavLinks = () => (
    <>
      <Link to="/" className='listas-sublinhados' onClick={closeMenu}>Início</Link>
      <Link to="/Lance" className='listas-sublinhados' onClick={closeMenu}>Lançamento</Link>
      <Link to="/Equipamentos" className='listas-sublinhados' onClick={closeMenu}>Equipamentos</Link>
      <Link to="/Objetivo" className='listas-sublinhados' onClick={closeMenu}>Objetivo</Link>
      <Link to="/Publico" className='listas-sublinhados' onClick={closeMenu}>Público</Link>
      <Link to="/Bibliografia" className='listas-sublinhados' onClick={closeMenu}>Bibliografia</Link>
    </>
  )

  const SearchBar = () => (
    <div className="search-container">
      <button type="submit" className="search-button">
        <img src={Lupa} alt="Pesquisar" />
      </button>
      <input type="text" className="search-input" placeholder="Pesquisar..." />
    </div>
  )

  return (
    <nav className='NavBar'>
      <div className="navbar-brand">
        {/* You could add a logo here */}
      </div>

      {/* Desktop Menu */}
      <ul>
        {NavLinks().props.children.map((link, index) => (
          <li key={index} className='Navs'>{link}</li>
        ))}
        <li>
          <SearchBar />
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <button className="botao-menu" onClick={toggleMenu}>
        {isOpen ? <X size={32} /> : <List size={32} />}
      </button>

      {/* Mobile Menu Container */}
      <div className={`menu-mobile-container ${isOpen ? 'open' : ''}`}>
        <nav>
          <NavLinks />
          <SearchBar />
        </nav>
      </div>
    </nav>
  )
}

export default Navbar