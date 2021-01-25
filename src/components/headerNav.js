import React, { useState } from "react"
import { Link } from "gatsby"

export default function HeaderNav({ location }) {
  console.log({ location })
  const [showMenu, setShowMenu] = useState(false)
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Me",
      path: "/about",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Contact Me",
      path: "/contact",
    },
  ]

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <header>
      <div
        className={showMenu ? "menu-btn close" : "menu-btn"}
        onClick={toggleMenu}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className={showMenu ? "menu show" : "menu"}>
        <div className={showMenu ? "menu-branding show" : "menu-branding"}>
          <div className="portrait"></div>
        </div>
        <ul className={showMenu ? "menu-nav show" : "menu-nav"}>
          {links.map((link, i) => {
            if (i === 0) {
              return (
                <li
                  key={i}
                  className={
                    showMenu ? "nav-item current show" : "nav-item current"
                  }
                >
                  <Link to={link.path} className="nav-link">
                    {link.title}
                  </Link>
                </li>
              )
            } else {
              return (
                <li
                  key={i}
                  className={showMenu ? "nav-item show" : "nav-item current"}
                >
                  <Link to={link.path} className="nav-link">
                    {link.title}
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </nav>
    </header>
  )
}
