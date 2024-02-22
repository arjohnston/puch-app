import styled from '@emotion/styled';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const StyledBody = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Body: React.FunctionComponent<Props> = ({ children }: Props) => (
  <StyledBody>{children}</StyledBody>
);

export default Body;
