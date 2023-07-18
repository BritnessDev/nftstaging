import React, { useState } from "react"
import { MenuItems } from "./MenuItems"
import "./Dropdown.css"
import { Link } from "react-router-dom"
import { useMoralis } from "react-moralis"

function Dropdown({setDropdown}) {
  const [click, setClick] = useState(false)
  const { user, isAuthenticated } = useMoralis()
  const handleClick = () => setClick(!click)
  const onMouseEnter = () => {
    if (user?.attributes.isAdmin === true) {
      if (window.innerWidth < 960) {
        setDropdown(false)
      } else {
        setDropdown(true)
      }
    }
  }

  const onMouseLeave = () => {
    setDropdown(false)
  }
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown
