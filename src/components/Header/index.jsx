import React from "react"

import { Link } from "react-router-dom"

import "./styles.css"

const Header = ({ children }) => {
  return (
    <header>
      <div>
        <Link to="/">
          <span className="logo">
            Marvel
          </span>
        </Link>
     
        <nav>
          {children}
        </nav>
      </div>
    </header>
  )
}

export default Header
