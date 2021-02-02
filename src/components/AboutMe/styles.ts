import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 2/5;
  grid-row: 1/2;

  > h1 {
    text-align: center;
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

  h1 {
    margin-left: 20px;
  }

  section {
    background: #222;
    height: 150px;
    padding: 20px;

    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    p {
      color: #fdf5d8;
    }
  }
`;
