import styled from '@emotion/styled';
import * as Core from '@puch-app/core';

const StyledSidebar = styled.div({
  backgroundColor: Core.Color.Background.Secondary,
  paddingLeft: Core.Unit.MD,
  paddingRight: Core.Unit.MD,
  paddingBottom: Core.Unit.SM,
  paddingTop: Core.Unit.SM,
  color: Core.Color.White,
});

const Sidebar: React.FunctionComponent = () => (
  <StyledSidebar>Sidebar</StyledSidebar>
);

export default Sidebar;
