import styled from 'styled-components';

import {
  ContainerCard,
  HeaderCard,
  ImagemCard,
} from '../../styles/shared/Card/styles';

export const Container = styled(ContainerCard)`
  grid-column: 1/3;
  grid-row: 3/4;
`;

export const Header = styled(HeaderCard)`
  img {
    width: 250px;
  }

  @media (max-width: 900px) {
    width: 250px;
    img {
      width: 200px;
    }
  }
`;

export const Imagem = styled(ImagemCard)`
  svg path {
    fill: #fdf5d8;
  }
  svg:hover path {
    fill: #00e676;
    transition: all 0.2s;
  }

  a:hover {
    transform: translateY(-5px);
    transition: all 0.2s;
  }

  @media (max-width: 900px) {
    margin: 6px 0;
  }
`;
