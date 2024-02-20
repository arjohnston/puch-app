import styled from '@emotion/styled';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Body = styled.div({});

const Component: React.FunctionComponent<Props> = ({ children }: Props) => (
  <Body>{children}</Body>
);

export default Component;
