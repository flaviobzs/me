import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    width: 90%;
  }
`
