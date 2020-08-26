import styled, { css } from "styled-components"
import { Whatsapp, Telegram } from "@styled-icons/boxicons-logos"

interface NavigationProps {
  isChecked: boolean
}

export const Container = styled.nav<NavigationProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  background-color: ${props => props.theme.colors.background};
  padding: 0 30px;
  position: fixed;
  width: 100%;
  z-index: 12;

  img {
    width: 75px;
    height: 75px;
    margin: 0;
  }

  > div {
    z-index: 15;
    cursor: pointer;

    span {
      background-color: ${props => props.theme.colors.text} !important;
    }
  }

  ul {
    z-index: 12;
    position: fixed;
    height: 100vh;
    width: 100vw;
    margin: 0px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0px;
    top: 0px;
    background-color: ${props => props.theme.colors.background};
    display: ${props => (props.isChecked ? "flex" : "none")};

    &:hover {
      li {
        &:hover {
          a {
            color: #000;
            background: rgba(255, 255, 255, 1);
          }
        }

        a {
          color: #948313;
        }
      }
    }

    li {
      display: block;
      list-style: none;
      text-align: center;
      margin: 5px 0;

      &:nth-child(6n + 1) {
        a {
          &:before {
            background: #81ecec;
          }
        }
      }
      &:nth-child(6n + 2) {
        a {
          &:before {
            background: #ff7675;
          }
        }
      }
      &:nth-child(6n + 3) {
        a {
          &:before {
            background: #81ecec;
          }
        }
      }
      &:nth-child(6n + 4) {
        a {
          &:before {
            background: #a29bfe;
          }
        }
      }
      &:nth-child(6n + 5) {
        a {
          &:before {
            background: #fd79a8;
          }
        }
      }
      &:nth-child(6n + 6) {
        a {
          &:before {
            background: #ffeaa7;
          }
        }
      }

      a {
        color: #333;
        text-decoration: none;
        font-size: 3em;
        padding: 5px 20px;
        display: inline-flex;
        font-weight: 700;
        transition: 0.5s;

        &:hover {
          &:before {
            content: attr(data-text);
            opacity: 1;
            left: 50%;
            letter-spacing: 0px;
            width: 2800px;
            height: 2800px;
          }
        }

        &:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 40%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 5rem;
          color: rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0px;
          transition: letter-spacing 0.5s, left 0.5s;
        }
      }
    }
  }
`

const iconCSS = css`
  width: 55px;
  height: 55px;
  cursor: pointer;
  margin: 30px 10px;

  &:hover {
    fill: ${props => props.theme.colors.text};
  }
`

export const WhatsappIcon = styled(Whatsapp)`
  ${iconCSS}
  fill: #34af23;
`
export const TelegramIcon = styled(Telegram)`
  ${iconCSS}
  fill: #00bcf2;
`
