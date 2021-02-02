import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 15px;
  border: 2px solid #fdf5d8;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  background: #222;
`;

export const HeaderCard = styled.div`
  height: 40px;

  background: #fdf5d8;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  display: flex;
  place-content: center;

  img {
    width: 120px;
  }
`;

export const ImagemCard = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
