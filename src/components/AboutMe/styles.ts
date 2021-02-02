import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 2/5;
  grid-row: 1/2;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 300px;
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  background: #fdf5d8;
  border-radius: 15px;
  border: 2px solid #fdf5d8;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 250px;
    margin: 5px 0 0 5px;
  }

  section {
    background: #222;
    height: 150px;
    padding: 5px;

    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
