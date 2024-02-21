import styled from '@emotion/styled';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const StyledBody = styled.div({});

const Body: React.FunctionComponent<Props> = ({ children }: Props) => (
  <StyledBody>{children}</StyledBody>
);

export default Body;
