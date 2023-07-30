import styled from 'styled-components';
import backgroundImage from 'components/assets/background-image.jpg';

export const Container = styled.div`
  outline: 2px solid tomato;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  padding: 20px 10px;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  color: #87ceeb;
  text-transform: uppercase;
  width: 800px;
  margin: 0 auto;
  position: relative;

  text-shadow: 0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.5),
    0 0 30px rgba(255, 165, 0, 0.3);

  @keyframes shineAnimation {
    0% {
      transform: translateY(-100%);
    }
    20% {
      transform: translateY(
        20vh
      ); /* Stop at the center of the page (adjust 50vh to change the stopping point) */
    }
    60% {
      transform: translateY(5vh); /* Keep the position steady at the center */
    }
  }

  animation: shineAnimation 10s linear infinite; /* Updated animation duration to 10 seconds */

  -webkit-text-fill-color: transparent;
  background-color: transparent;
  -webkit-text-stroke: 2px #87ceeb;
  text-stroke: 2px #87ceeb;

  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
