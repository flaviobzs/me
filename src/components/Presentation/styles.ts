import styled, { css } from "styled-components"

interface AvatarProps {
  backgroundUrl: String
  imageStatus: boolean
}

export const Container = styled.div`
  padding: 20px 60px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Description = styled.div`
  width: 25%;
  margin-right: 10%;

  h1 {
    margin-bottom: 1.4rem;
    font-size: 2.9rem;
  }

  h3 {
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
  }

  p {
    font-family: "Poppins";
    margin-bottom: 10px;
    font-size: 1.1rem;
    font-weight: 100;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: inline-block;
      margin-top: 30px;
      padding: 10px;
      border: ${props => props.theme.detail} 3px solid;
      border-radius: 20px;
      text-decoration: none;
      font-size: 1rem;
      color: ${props => props.theme.text};
      align-self: center;
      justify-items: center;
      justify-self: center;
    }
  }

  @media (max-width: 800px) {
    margin-right: 0px;
    margin-bottom: 20px;
    width: 100%;
  }
`

export const Avatar = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;

  h1 {
    position: absolute;
    right: 20px;
    bottom: 30%;
    color: white;
    display: ${props => (props.imageStatus ? "block" : "none")};
    z-index: 4;
  }

  img {
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
    width: 100%;
    transition: all 1s;

    filter: opacity(60%);
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
    opacity: ${props => (props.imageStatus ? ".7" : "0")};
    z-index: 3;
    background-color: ${props => props.theme.detail};
    transition: all 1s;
  }

  &:hover {
    img {
      transform: scale(1.3);
      transform: rotateZ(-5deg);
      filter: contrast(120%);
    }

    div {
      transform: scale(1.3);
      transform: rotateZ(-5deg);
    }
  }

  @media (max-width: 800px) {
    margin-top: 30px;

    div {
      opacity: 0.6;
      transform: rotateZ(-5deg);
    }

    img {
      transform: rotateZ(-5deg);
    }
  }
`
