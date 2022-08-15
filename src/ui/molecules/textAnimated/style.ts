import styled from '@emotion/styled';

export const TextStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(28, 28, 28, 1);
  overflow: auto;
  .wrapper {
    display: flex;
    perspective: 450px;
  }

  span {
    display: inline-block;
    position: relative;
    font-size: 10vw;
    font-family: 'Fredoka One', cursive;
    color: #f6ff6b;
    transition: all 0.5s;
    animation: rotate 5s ease-in infinite;
    animation-direction: alternate;
    letter-spacing: 0.5vw;
    -webkit-text-stroke: 1.5px #c4cb58;
    transform-style: preserve-3d;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: attr(data-char);
      transform: translateY(75%) rotateX(180deg);
      color: transparent;
      background-image: linear-gradient(
        180deg,
        rgba(246, 255, 107, 0) 10%,
        rgba(246, 255, 107, 0.5)
      );
      -webkit-text-stroke: 0px #c4cb58;
    }
    span {
      position: absolute;
      top: 0;
      left: 0;
      animation: none;
      span:nth-child(1) {
        transform: translateZ(0px);
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`;
