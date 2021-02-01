import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', serif;
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



h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
  color: #000;
}

p {
  font-weight: 400;
  color: #000;
}

`;
