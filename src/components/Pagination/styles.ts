import styled, { css } from "styled-components"
import { Minus } from "styled-icons/boxicons-regular"
import { ArrowBackIos, ArrowForwardIos } from "styled-icons/material-rounded"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;

  span {
    font-size: 20px;
    margin: auto 30px;
  }
`
const iconCSS = css`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.detail};
  }
`
export const LeftArrowIcon = styled(ArrowBackIos)`
  ${iconCSS}
`
export const RightArrowIcon = styled(ArrowForwardIos)`
  ${iconCSS}
`
export const WithoutIcon = styled(Minus)`
  opacity: 0.5;
  width: 40px;
  height: 40px;
`
