import React from 'react';

import {
  Container,
  Content,
  Info,
  PrimaryInfo,
  SecondaryInfo,
  InfoSoftSkill,
} from './styles';

import HardSkill from '../../assets/svg/fonts/hardskill.svg';
import aboutme from '../../assets/svg/fonts/aboutme.svg';
import Frase from '../../assets/img/frase.svg';

const AboutMe: React.FC = () => (
  <Container>
    <Content>
      <img src={aboutme} alt="AboutMe" />
      <section>
        <PrimaryInfo>
          <Info>
            <p>LEVEL</p>
            <div>
              <span>25</span>
            </div>
          </Info>

          <Info>
            <p>CLASSE</p>
            <div>
              <span>DEV JR</span>
            </div>
          </Info>

          <Info>
            <p>ORIGEM</p>
            <div>
              <span>FORTALEZA-CE</span>
            </div>
          </Info>

          <Info>
            <p>GUILDA</p>
            <div>
              <a href="https://fortbrasil.abler.com.br/vagas">FORTBRASIL</a>
            </div>
          </Info>

          <Info>
            <p>EXP</p>
            <div>
              <span>1 ANO</span>
            </div>
          </Info>
        </PrimaryInfo>

        <SecondaryInfo>
          <InfoSoftSkill>
            <p>SOFT SKILL:</p>
            <div>
              <span>
                - Comunicativo <br />- Determinado <br />- Otimo trabalho em
                equipe <br />- Constante aprendizado <br />
              </span>
            </div>
          </InfoSoftSkill>
          <img src={Frase} alt="frase" />
        </SecondaryInfo>
      </section>
    </Content>
    <img src={HardSkill} alt="HardSkill" />
  </Container>
);

export default AboutMe;
