import styled from '@emotion/styled';
import React from 'react';
import { Logo } from '../../assets/svg';
import { Text, Unit } from '../../common';

const StyledHeader = styled.header({
  color: 'pink',
  margin: Unit.XXL,
});

const Header: React.FunctionComponent = () => (
  <StyledHeader>
    <Logo />
    <Text.Body bold>header</Text.Body>
  </StyledHeader>
);

export default Header;
