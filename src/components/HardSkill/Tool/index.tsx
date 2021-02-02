import React from 'react';

import { Container, Header, Imagem } from './styles';

import figma from '../../../assets/svg/tool/figma.svg';
import vscode from '../../../assets/svg/tool/vscode.svg';
import git from '../../../assets/svg/tool/git.svg';
import tools from '../../../assets/svg/fonts/tools.svg';

const Tool: React.FC = () => (
  <Container>
    <Header>
      <img src={tools} alt="Tools" />
    </Header>

    <Imagem>
      <img src={figma} alt="figmaIcon" />
      <img src={vscode} alt="vscodeIcon" />
      <img src={git} alt="gitIcon" />
    </Imagem>
  </Container>
);

export default Tool;
