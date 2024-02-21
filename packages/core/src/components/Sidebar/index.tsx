import styled from '@emotion/styled';
import { Color } from '../../common';

const StyledSidebar = styled.div({
  color: Color.Blue.B50,
});

const Sidebar: React.FunctionComponent = () => (
  <StyledSidebar>Sidebar</StyledSidebar>
);

export default Sidebar;
