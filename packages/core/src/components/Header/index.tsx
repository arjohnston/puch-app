import styled from '@emotion/styled';
import React from 'react';
import { Unit, Text } from '../../common';
import { Logo } from '../../assets/svg';

const Header = styled.header({
  color: 'pink',
  margin: Unit.XXL,
});

const Component: React.FunctionComponent = () => (
  <Header>
    <Logo />
    <Text bold>header</Text>
  </Header>
);

export default Component;
