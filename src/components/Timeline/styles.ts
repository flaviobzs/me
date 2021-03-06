import styled, { css } from "styled-components"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { Education } from "styled-icons/zondicons"
import { Suitcase } from "styled-icons/entypo"

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 50px;
`

export const Line = styled(VerticalTimeline)`
  padding: 30px 30px;
`
export const LineElement = styled(VerticalTimelineElement)`
  > span {
    background: ${props =>
      props.coloritens === "work" ? props.theme.detail : props.theme.detail3};
    color: ${props => props.theme.text};
  }
  > div {
    padding: 10px !important;
    color: black;
    border-top: 3px solid
      ${props =>
        props.coloritens === "work" ? props.theme.detail : props.theme.detail3};

    p {
      font-size: 12px;
    }
  }
`
const iconCSS = css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: white;
  cursor: pointer;
`
export const WorkIcon = styled(Suitcase)`
  ${iconCSS}
`
export const EducationIcon = styled(Education)`
  ${iconCSS}
`
