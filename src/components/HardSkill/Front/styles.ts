import styled from 'styled-components';

import {
  ContainerCard,
  HeaderCard,
  ImagemCard,
} from '../../../styles/shared/Card/styles';

export const Container = styled(ContainerCard)`
  grid-column: 3/4;
  grid-row: 2/4;
`;

export const Header = HeaderCard;

export const Imagem = styled(ImagemCard)`
  img {
    margin: 10px;
  }
`;
