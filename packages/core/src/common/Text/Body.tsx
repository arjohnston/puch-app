import styled from '@emotion/styled';
import * as Unit from '../Unit';
import type { default as Size } from './Size';

interface Props {
  children: React.ReactNode;
  size?: Size;
  bold?: boolean;
}

const StyledText = styled.p(
  ({ fontSize, bold }: { fontSize: number; bold: boolean }) => ({
    fontSize,
    fontWeight: bold ? 'bold' : 'normal',
  }),
);

function fontForSize(size: Size): number {
  switch (size) {
    case 'small':
      return Unit.SM;
    case 'medium':
      return Unit.MD;
    case 'large':
      return Unit.LG;
  }
}

const Body: React.FunctionComponent<Props> = ({
  children,
  size = 'medium',
  bold = false,
}) => {
  const fontSize = fontForSize(size);
  return (
    <StyledText fontSize={fontSize} bold={bold}>
      {children}
    </StyledText>
  );
};

export default Body;
