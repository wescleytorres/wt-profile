import styled from 'styled-components';

import {
  ContainerCard,
  HeaderCard,
  ImagemCard,
} from '../../../styles/shared/Card/styles';

export const Container = styled(ContainerCard)`
  grid-column: 2/3;
  grid-row: 2/3;
`;

export const Header = HeaderCard;

export const Imagem = ImagemCard;
