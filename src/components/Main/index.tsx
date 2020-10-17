import React from 'react';

import { Container, OtherLanguageContent, English } from './styles';

import Logo from '../../assets/logo.png';

const Main: React.FC = () => {
  return (
    <main>
      <Container>
        <img src={Logo} alt="Logo" />

        <input type="text" />

        <OtherLanguageContent>
          Disponibilizado pelo Google em: <English>English</English>
        </OtherLanguageContent>
      </Container>
    </main>
  );
};

export default Main;
