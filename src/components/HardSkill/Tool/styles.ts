import styled from 'styled-components';

import {
  ContainerCard,
  HeaderCard,
  ImagemCard,
} from '../../../styles/shared/Card/styles';

export const Container = styled(ContainerCard)`
  grid-column: 2/3;
  grid-row: 2/3;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Header = HeaderCard;

export const Imagem = styled(ImagemCard)`
  @media (max-width: 900px) {
    margin: 5px 0;
  }
`;
