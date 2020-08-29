import styled, { css } from "styled-components"
import { Sun } from "styled-icons/octicons"
import { Moon } from "styled-icons/fa-regular"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.text};
  position: fixed;
  left: 0;
  top: 50%;
  padding: 10px 5px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  gap: 20px;
  z-index: 10;

  img {
    height: 30px;
    width: 30px;
    margin: 0;
    cursor: pointer;
  }
`
const iconCSS = css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.background};
  cursor: pointer;
`

// > path {
//   fill: var(--discord-white);
// }

export const SunIcon = styled(Sun)`
  ${iconCSS}
`
export const MoonIcon = styled(Moon)`
  ${iconCSS}
`
