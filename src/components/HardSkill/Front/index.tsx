import React from 'react';

import { Container, Header, Imagem } from './styles';

import html from '../../../assets/svg/front/html.svg';
import css3 from '../../../assets/svg/front/css3.svg';
import javascript from '../../../assets/svg/front/javascript.svg';
import typescript from '../../../assets/svg/front/typescript.svg';
import react from '../../../assets/svg/front/react.svg';
import next from '../../../assets/svg/front/next.svg';
import vue from '../../../assets/svg/front/vue.svg';
import stylecomp from '../../../assets/svg/front/stylecomp.svg';
import front from '../../../assets/svg/fonts/front.svg';

const Front: React.FC = () => (
  <Container>
    <Header>
      <img src={front} alt="front" />
    </Header>

    <Imagem>
      <img src={html} alt="htmlIcon" />
      <img src={css3} alt="css3Icon" />
      <img src={javascript} alt="javascriptIcon" />
      <img src={typescript} alt="typescriptIcon" />
      <img src={react} alt="reactIcon" />
      <img src={next} alt="nextIcon" />
      <img src={vue} alt="vueIcon" />
      <img src={stylecomp} alt="stylecompIcon" />
    </Imagem>
  </Container>
);

export default Front;
