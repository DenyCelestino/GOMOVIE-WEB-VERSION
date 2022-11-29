import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import LOGO from './logo.png'
import './style.css'
const Header = () => {
  const [on, setOn] = useState(false)

  const toogleClick = () => {
    setOn(!on)
  }

  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <div className="right-nav-container">
          <a className="logo">
            <img
              style={{ height: '100%', width: '100%' }}
              src={LOGO}
            />
          </a>

          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/filmes">Filmes</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/amimacao">Animação</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/Series">Series</Link>
            </li>
          </ul>
        </div>

        <span className="login-button">
          <Link to="#">Login/Singin</Link>
        </span>

        <div onClick={toogleClick} className="mobile">
          {!on ? (
            <FaBars color="red" size={20} />
          ) : (
            <AiOutlineClose color="red" size={20} />
          )}
        </div>
        <motion.div
          initial={{ x: 300 }}
          animate={on ? { x: 0 } : { x: 300 }}
          transition={{ duration: 0.8 }}
          className={on ? 'mobile-nav' : 'mobile-nav'}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
          <li>
            <Link to="/animacao">Animação</Link>
          </li>
          <li>
            <Link to="/Series">Series</Link>
          </li>
        </motion.div>
      </div>
    </nav>
  )
}

export default Header
