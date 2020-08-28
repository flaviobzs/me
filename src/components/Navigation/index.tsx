import React, { useState } from "react"
import HamburgerMenu from "react-hamburger-menu"
import { Link } from "gatsby"
import { useTheme } from "../../hooks/theme"

import { useLanguege } from "../../hooks/languege"

import { Container, WhatsappIcon, TelegramIcon } from "./styles"

import logowhite from "../../images/logowhite.png"
import logoblack from "../../images/logo.png"

const Navigation: React.FC = () => {
  const [checked, setChecked] = useState(false)

  const { t } = useLanguege()
  const { theme } = useTheme()

  return (
    <Container isChecked={checked}>
      <Link to="/">
        <img src={theme === "dark" ? logoblack : logowhite} />
      </Link>

      <HamburgerMenu
        isOpen={checked}
        menuClicked={() => {
          setChecked(!checked)
        }}
        width={30}
        height={20}
        strokeWidth={5}
        rotate={0}
        borderRadius={5}
        animationDuration={0.3}
      />
      <ul>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5582999522005&text=Ol%C3%A1%20Fl%C3%A1vio%2C%20consegui%20falar%20com%20voc%C3%AA%20atrav%C3%A9s%20de%20seu%20SITE!"
            target="_blank"
          >
            <WhatsappIcon />
          </a>
          <a href="https://t.me/bzsflavio" target="_blank">
            <TelegramIcon />
          </a>
        </div>
        <li>
          <Link
            to="/"
            data-text="Inicio"
            onClick={() => {
              window.location.pathname == "/" ? setChecked(false) : ""
            }}
          >
            {t("home")}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            data-text="Sobre"
            onClick={() => {
              window.location.pathname == "/about" ? setChecked(false) : ""
            }}
          >
            {t("about")}
          </Link>
        </li>
        <li>
          <Link
            to="/actuations"
            data-text="Atuações"
            onClick={() => {
              window.location.pathname == "/actuations" ? setChecked(false) : ""
            }}
          >
            {t("actuations")}
          </Link>
        </li>
        {/* <li>
          <Link to="/posts" data-text="Posts" onClick={() => {
              window.location.pathname == "/posts" ? setChecked(false) : ""
            }}>
            {t("posts")}
          </Link>
        </li> */}
      </ul>
    </Container>
  )
}

export default Navigation
