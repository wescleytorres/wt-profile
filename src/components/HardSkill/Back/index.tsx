import React from 'react';

import { Container, Header, Imagem } from './styles';

import python from '../../../assets/svg/python.svg';
import node from '../../../assets/svg/node.svg';
import mongodb from '../../../assets/svg/mongodb.svg';
import postgresql from '../../../assets/svg/postgresql.svg';
import mysql from '../../../assets/svg/mysql.svg';

const Back: React.FC = () => (
  <Container>
    <Header>
      <h1>Back</h1>
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
