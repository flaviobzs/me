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

  a {
    display: inline-block;
    margin-top: 30px;
    padding: 10px;
    border: ${props => props.theme.detail} 3px solid;
    border-radius: 20px;
    text-decoration: none;
    font-size: 1rem;
    color: ${props => props.theme.text};
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
  /* width: 60%; */
  position: relative;

/* 
  background-image: linear-gradient(rgba(0, 0, 255, 0.4), rgba(0, 0, 255, 0.4)),
    url(${props => `${props.backgroundUrl}`}); */

  h1 {
    position: absolute;
    right: 20px;
    bottom: 30%;
    color: white;
    display: ${props => (props.imageStatus ? "block" : "none")};
    
  }

  div {
    border-top-left-radius: 150px;
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
    margin: 10px 0 15px 0;
    width: 100%;
    height: 30em;
    background-image: url(${props => `${props.backgroundUrl}`});
    background-size: cover;
    background-position: center;
    filter: brightness(30%);
    transition: 0.6s;

    ${props =>
      props.imageStatus
        ? css`
            background-image: linear-gradient(
                rgba(113, 94, 245, 0.7),
                rgba(71, 47, 207, 0.6)
              ),
              url(${props => `${props.backgroundUrl}`});

            filter: brightness(100%);
          `
        : css`
            background-image: url(${props => `${props.backgroundUrl}`});
          `};   
  }

  &:hover {
    img {
      /* max-width: 600px;
        max-height: 600px; */
      /* transform: scale(1.3);
      transform: rotateZ(-5deg);
      filter: brightness(10%); */
    }

    h1 {
      /* display: block; */
    }
  }

  @media (max-width: 800px) {
    /* padding: 20px; */
    width: 100%;

    div{
    height: 15em;
    background-image: linear-gradient(
                rgba(113, 94, 245, 0.7),
                rgba(71, 47, 207, 0.6)
              ),
              url(${props => `${props.backgroundUrl}`});
    filter: brightness(100%);

    }
  
  }
`
