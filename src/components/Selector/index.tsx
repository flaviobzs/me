import React, { useState, useCallback } from "react"

import { useTheme } from "../../hooks/theme"
import { useLanguege } from "../../hooks/languege"

import { Container, SunIcon, MoonIcon } from "./styles"

import brasil from "../../images/brasil.png"
import eua from "../../images/eua.png"

const Selector: React.FC = () => {
  const { setLocale, locale } = useLanguege()

  const { theme, toggleTheme } = useTheme()

  return (
    <Container>
      {theme === "dark" ? (
        <SunIcon onClick={toggleTheme} />
      ) : (
        <MoonIcon onClick={toggleTheme} />
      )}
      <img
        src={locale === "pt" ? eua : brasil}
        onClick={() => {
          locale === "pt" ? setLocale("en") : setLocale("pt")
        }}
      ></img>
    </Container>
  )
}

export default Selector
