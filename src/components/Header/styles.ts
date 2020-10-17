import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 48px;
`;

export const MenuSection = styled.div`
  display: flex;
  align-items: center;

  padding: 0 12px;
`;

export const BurgerIconContainer = styled.div`
  padding: 12px 12px 7px 0;

  cursor: pointer;
`;

export const MenuItem = styled.div`
  font-size: 12px;
  font-weight: 600;

  text-transform: uppercase;

  color: #757575;

  padding: 12px 8px;

  cursor: pointer;

  &.active {
    color: #4285f4;
    border-bottom: 2px solid #4285f4;
  }

  &:not(.active) {
    margin-bottom: 2px;
  }
`;

export const MoreIconContainer = styled.div`
  padding: 12px 12px 7px 0;

  cursor: pointer;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  padding: 4px;

  position: relative;

  background: #04521b;
  color: #fff;

  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
