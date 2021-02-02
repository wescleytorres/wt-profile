import React from 'react';

import { Container, Header, Imagem } from './styles';

import figma from '../../../assets/svg/figma.svg';
import vscode from '../../../assets/svg/vscode.svg';
import git from '../../../assets/svg/git.svg';

const Tool: React.FC = () => (
  <Container>
    <Header>
      <h1>Tools</h1>
    </Header>

    <Imagem>
      <img src={figma} alt="figmaIcon" />
      <img src={vscode} alt="vscodeIcon" />
      <img src={git} alt="gitIcon" />
    </Imagem>
  </Container>
);

export default Tool;
