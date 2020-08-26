import styled, { css } from "styled-components"

import {
  Facebook,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "@styled-icons/boxicons-logos"

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 0px;
  background-color: ${props => props.theme.colors.background};

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
  }

  p {
    font-size: 13px;
    margin: 0px;

    span {
      font-family: "Monoton", cursive;
    }
  }
`

export const BoxIcon = styled.a`
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 7px;
  border-radius: 30%;
  box-shadow: 0 5px 7px -5px ${props => props.theme.colors.text};
  overflow: hidden;
  position: relative;

  &:hover {
    svg {
      transform: scale(1.3);
      color: white;
    }

    &::before {
      animation: aaa 0.7s 1;
      top: -10%;
      left: -10%;
    }

    @keyframes aaa {
      0% {
        left: -110%;
        top: 90%;
      }
      50% {
        left: 10%;
        top: 30%;
      }
      100% {
        top: -10%;
        left: -10%;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: ${props => props.theme.colors.detail};
    transform: rotate(45deg);
    left: -110%;
    top: 90%;
  }
`

const iconCSS = css`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: ${props => props.theme.colors.text};

  &:hover {
    fill: white;
  }
`

export const FacebookIcon = styled(Facebook)`
  ${iconCSS}
`
export const GithubIcon = styled(Github)`
  ${iconCSS}
`
export const TwitterIcon = styled(Twitter)`
  ${iconCSS}
`
export const LinkedinIcon = styled(Linkedin)`
  ${iconCSS}
`
export const InstagramIcon = styled(Instagram)`
  ${iconCSS}
`
