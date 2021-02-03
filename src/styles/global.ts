import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Press Start 2P', cursive;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background: #222;
  -webkit-font-smoothing: antialiased;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#00e676, #00b960);
    clip-path: circle(30% at left 70%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#00e676, #25352d);
    clip-path: circle(20% at right 10%);
  }

}

p {
  color: #fdf5d8;
  font-size: 12px;
  line-height: 18px;
}

`;
