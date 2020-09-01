import React from "react"
import { useLanguege } from "../../hooks/languege"

import {
  Container,
  BoxIcon,
  FacebookIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  GoogleIcon,
} from "./styles"

export default function Footer() {
  const { t } = useLanguege()

  return (
    <Container>
      <div>
        <BoxIcon
          href="https://www.linkedin.com/in/santoflavio/"
          target="_blank"
        >
          <LinkedinIcon />
        </BoxIcon>
        <BoxIcon href="mailto:bzsflavio@gmail.com" target="_blank">
          <GoogleIcon />
        </BoxIcon>

        <BoxIcon href="https://github.com/flaviobzs" target="_blank">
          <GithubIcon />
        </BoxIcon>

        {/* <BoxIcon href="https://www.instagram.com/flaviobs_/" target="_blank">
          <InstagramIcon />
        </BoxIcon> */}
        {/* <BoxIcon href="https://twitter.com/FlavioBS_" target="_blank">
          <TwitterIcon />
        </BoxIcon> */}
        {/* <BoxIcon href="https://www.facebook.com/santoflaviobs" target="_blank">
          <FacebookIcon />
        </BoxIcon> */}
      </div>
      <p>
        © {new Date().getFullYear()} | {t("footer")} <span>FlávioBS</span>
      </p>
    </Container>
  )
}
