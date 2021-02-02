import React from 'react';

import { Container } from './styles';

import Perfil from '../../assets/img/perfil.jpeg';

import WescleyTorres from '../../assets/svg/fonts/wt.svg';

const Profile: React.FC = () => (
  <Container>
    <div>
      <img src={Perfil} alt="Profile" />
    </div>

    <img src={WescleyTorres} alt="WescleyTorres" />
  </Container>
);

export default Profile;
