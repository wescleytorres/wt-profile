import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 260px;
  height: 100%;

  background: #fdf5d8;
  border-radius: 15px;
  border: 2px solid #fdf5d8;
  box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.3);

  div {
    background: #222;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    height: 250px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      border: 2px solid #00e676;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  h1 {
    flex: 1;
    font-size: 25px;
    text-align: center;
    margin: 30px;
    font-weight: 700;
  }
`;
