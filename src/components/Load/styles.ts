import styled from "styled-components"

// @import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: black;

  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 250px;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .title {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;

      .block {
        width: 0%;
        height: inherit;
        background: #E2142F;
        position: absolute;
        animation: mainBlock 1s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;
      }

      h1 {
        /* font-family: 'Poppins'; */
        color: #fff;
        font-size: 32px;
        -webkit-animation: mainFadeIn 1s forwards;
        -o-animation: mainFadeIn 1s forwards;
        animation: mainFadeIn 1s forwards;
        animation-delay: 1.0s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        span {
          width:0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;

          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
          animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;

        }
      }
    }

    .role {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: -10px;

      .block {
        width: 0%;
        height: inherit;
        background: #E7E7E7;
        position: absolute;
        animation: secBlock 1.0s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 1s;
        display: flex;
      }

      p {
        animation: secFadeIn 1.3s forwards;
        animation-delay: 1.2s;
        opacity: 0;
        font-weight: 400;
        font-family: 'Lato';
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 5px;
      }
    }
  }
}





@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
   65% {
      width: 7px;
    height: 7px;
      bottom: 0px;
      width: 15px
   }
   80% {
      width: 10px;
    height: 10px;
      bottom: 20px
   }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;

  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
`
