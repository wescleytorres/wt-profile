import React from 'react';

import Profile from '../../components/Profile';
import AboutMe from '../../components/AboutMe';
import HardSkill from '../../components/HardSkill';
import SocialMedias from '../../components/SocialMedias';

import { Container } from './styles';

const Presentation: React.FC = () => {
  return (
    <Container>
      <Profile />
      <AboutMe />
      <HardSkill />
      <SocialMedias />
    </Container>
  );
};

export default Presentation;
