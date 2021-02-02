import React from 'react';

import { Container, Header, Imagem } from './styles';

import python from '../../../assets/svg/back/python.svg';
import node from '../../../assets/svg/back/node.svg';
import mongodb from '../../../assets/svg/back/mongodb.svg';
import postgresql from '../../../assets/svg/back/postgresql.svg';
import mysql from '../../../assets/svg/back/mysql.svg';

import back from '../../../assets/svg/fonts/back.svg';

const Back: React.FC = () => (
  <Container>
    <Header>
      <img src={back} alt="Back" />
    </Header>

    <Imagem>
      <img src={python} alt="pythonIcon" />
      <img src={node} alt="nodeIcon" />
      <img src={mongodb} alt="mongodbIcon" />
      <img src={postgresql} alt="postgresqlIcon" />
      <img src={mysql} alt="mysqlIcon" />
    </Imagem>
  </Container>
);

export default Back;
