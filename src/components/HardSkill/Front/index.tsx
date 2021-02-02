import React from 'react';

import { Container, Header, Imagem } from './styles';

import html from '../../../assets/svg/html.svg';
import css3 from '../../../assets/svg/css3.svg';
import javascript from '../../../assets/svg/javascript.svg';
import typescript from '../../../assets/svg/typescript.svg';
import react from '../../../assets/svg/react.svg';
import next from '../../../assets/svg/next.svg';
import vue from '../../../assets/svg/vue.svg';
import stylecomp from '../../../assets/svg/stylecomp.svg';

const Front: React.FC = () => (
  <Container>
    <Header>
      <h1>Front</h1>
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
