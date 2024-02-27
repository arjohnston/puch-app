import styled from '@emotion/styled';
import * as Core from '@puch-app/core';
import React from 'react';

const StyledHeader = styled.header({
  color: Core.Color.Grey.G400,
  backgroundColor: Core.Color.Background.Primary,
  paddingLeft: Core.Unit.MD,
  paddingRight: Core.Unit.MD,
  paddingBottom: Core.Unit.SM,
  paddingTop: Core.Unit.SM,
});

const Header: React.FunctionComponent = () => (
  <StyledHeader>
    <Core.Text.Body bold>header</Core.Text.Body>
  </StyledHeader>
);

export default Header;
