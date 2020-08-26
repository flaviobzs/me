import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  padding: 30px 50px;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.26px;
  text-align: justify;

  @media (max-width: 650px) {
    margin-top: 0px;
    padding-top: 10px;
  }
`
