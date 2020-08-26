import styled, { css } from "styled-components"
import { LocalFireDepartment } from "@styled-icons/material-twotone"

let ttt =
  "https://rockcontent.com/wp-content/uploads/2020/02/teste-de-lideran%C3%A7a.png"

interface ContainerProps {
  isActive: boolean
  url: String
}

export const Container = styled.div<ContainerProps>`
  background-image: url(${props => `${props.url}`});
  position: relative;
  margin: 10px;
  background-size: cover;
  background-position: center;
  height: 400px;
  cursor: pointer;
  border-radius: 30px;
  z-index: 3;
  border: ${props => props.theme.colors.text} 3px solid;

  ${props =>
    !props.isActive
      ? css`
          width: 60px;
        `
      : css`
          flex: 1;
        `};

  .label {
    bottom: 10px;
    left: 10px;

    display: flex;
    position: absolute;
    right: 0px;

    height: 40px;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

    .icon {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      min-width: 40px;
      max-width: 40px;
      height: 40px;
      border-radius: 100%;

      background-color: white;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-left: 10px;

      color: white;

      white-space: pre;

      > div {
        left: 20px;
        opacity: 0;
        position: relative;

        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
          opacity 0.5s ease-out;
      }

      .main {
        font-weight: bold;
        font-size: 1.2rem;
      }

      .sub {
        transition-delay: 0.1s;
      }
    }
  }

  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

  ${props =>
    props.isActive &&
    css`
      height: 440px;

      border-radius: 40px;

      .label {
        bottom: 20px;
        left: 20px;

        .info {
          > div {
            left: 0px;
            opacity: 1;
          }
        }
      }
    `}

  @media (max-width: 800px) {
    width: 500px;
    ${props =>
      !props.isActive &&
      css`
        display: none;
      `}

    .label {
      display: none;
    }
  }
`

export const FireIcon = styled(LocalFireDepartment)`
  width: 20px;
  height: 20px;

  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;

  fill: black;
  &:hover {
    opacity: 1;
  }
`
