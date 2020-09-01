import React, { useState, useCallback } from "react"

import { useTheme } from "../../hooks/theme"
import { useLanguege } from "../../hooks/languege"

import { Container, SunIcon, MoonIcon } from "./styles"

import brasil from "../../images/brasil.png"
import eua from "../../images/eua.png"

const Selector: React.FC = () => {
  const { setLocale, locale } = useLanguege()
  const [flag, setFlag] = useState(locale === "pt" ? eua : brasil)

  const { theme, toggleTheme } = useTheme()

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
            setLocale("en")
            setFlag(eua)
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
