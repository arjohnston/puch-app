import styled from '@emotion/styled';
import { Color } from '../../types';

interface Props {
  children: React.ReactNode;
  color?: Color.Any;
  size?: Size;
  bold?: boolean;
}

type Size = 'small' | 'medium' | 'large';

const StyledText = styled.p(
  ({ fontSize, bold, color }: { fontSize: string } & Props) => ({
    color,
    fontSize,
    fontWeight: bold ? 'bold' : 'normal',
    margin: 0,
  }),
);

const Body: React.FunctionComponent<Props> = ({
  children,
  size = 'medium',
  bold = false,
  color,
}) => {
  const fontSize = getFontSizeForType(size);
  return (
    <StyledText fontSize={fontSize} bold={bold} color={color}>
      {children}
    </StyledText>
  );
};

function getFontSizeForType(type: Size): string {
  switch (type) {
    case 'small':
      return '0.75rem';
    case 'medium':
      return '1rem';
    case 'large':
      return '1.25rem';
  }
}

export default Body;
