import React from 'react';

import { Container, Wrapper, Links } from './styles';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Wrapper>
          <Links>
            <span>Brasil</span>
          </Links>
        </Wrapper>
        <Wrapper>
          <Links>
            <span>Publicidade</span>
            <span>Negócios</span>
            <span>Sobre</span>
            <span>Como funciona a Pesquisa</span>
          </Links>
          <Links>
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Configurações</span>
          </Links>
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;
