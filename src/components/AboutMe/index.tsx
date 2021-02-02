import React from 'react';

import { Container, Content } from './styles';

import HardSkill from '../../assets/svg/fonts/hardskill.svg';
import aboutme from '../../assets/svg/fonts/aboutme.svg';

const AboutMe: React.FC = () => (
  <Container>
    <Content>
      <img src={aboutme} alt="AboutMe" />
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vestibulum pulvinar tortor eu mattis. Phasellus iaculis nisi vel sem
          elementum sagittis. Morbi vel augue sit amet sapien efficitur
          vulputate. Praesent at mattis libero. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Mauris sit
          amet metus ullamcorper ante porta sodales sed nec nunc.
        </p>
      </section>
    </Content>
    <img src={HardSkill} alt="HardSkill" />
  </Container>
);

export default AboutMe;
