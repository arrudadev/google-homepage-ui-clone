import React from 'react';

import {
  Container,
  MenuSection,
  BurgerIconContainer,
  MenuItem,
  MoreIconContainer,
  Avatar,
} from './styles';

import BurgerIcon from '../../assets/burger-icon.svg';
import MoreIcon from '../../assets/more-icon.svg';

const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <MenuSection>
          <BurgerIconContainer>
            <BurgerIcon />
          </BurgerIconContainer>
          <MenuItem className="active">All</MenuItem>
          <MenuItem>Images</MenuItem>
        </MenuSection>
        <MenuSection>
          <MoreIconContainer>
            <MoreIcon />
          </MoreIconContainer>
          <Avatar>A</Avatar>
        </MenuSection>
      </Container>
    </header>
  );
};

export default Header;
