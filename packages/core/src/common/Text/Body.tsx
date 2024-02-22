import styled from '@emotion/styled';
import { default as Size } from './Size';

interface Props {
  children: React.ReactNode;
  size?: Size;
  bold?: boolean;
}

const StyledText = styled.p(
  ({ fontSize, bold }: { fontSize: Size; bold: boolean }) => ({
    fontSize,
    fontWeight: bold ? 'bold' : 'normal',
  }),
);

const Body: React.FunctionComponent<Props> = ({
  children,
  size = Size.Medium,
  bold = false,
}) => {
  return (
    <StyledText fontSize={size} bold={bold}>
      {children}
    </StyledText>
  );
};

export default Body;
