import React, { useState, useCallback } from "react"

import { useTheme } from "../../hooks/theme"
import { useLanguege } from "../../hooks/languege"

import { Container, SunIcon, MoonIcon } from "./styles"

import brasil from "../../images/brasil.png"
import eua from "../../images/eua.png"

const Selector: React.FC = () => {
  const [flag, setFlag] = useState(brasil)

  const { theme, toggleTheme } = useTheme()
  const { setLocale } = useLanguege()

  return (
    <Container>
      {theme === "dark" ? (
        <SunIcon onClick={toggleTheme} />
      ) : (
        <MoonIcon onClick={toggleTheme} />
      )}
      <img
        src={flag}
        onClick={() => {
          if (flag === brasil) {
            setFlag(eua)
            setLocale("en")
          } else {
            setFlag(brasil)
            setLocale("pt")
          }
        }}
      ></img>
    </Container>
  )
}

export default Selector
