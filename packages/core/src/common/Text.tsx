import styled from '@emotion/styled';
import Unit, { UnitType } from './Unit';

type FontSize = 'small' | 'medium' | 'large';

interface Props {
  children: React.ReactNode;
  size?: FontSize;
  bold?: boolean;
}

const Text = styled.p(
  ({ fontSize, bold }: { fontSize: UnitType; bold: boolean }) => ({
    fontSize,
    fontWeight: bold ? 'bold' : 'normal',
  }),
);

function getCorrespondingFontSize(size: FontSize): UnitType {
  switch (size) {
    case 'small':
      return Unit.SM;
    case 'medium':
      return Unit.MD;
    case 'large':
      return Unit.LG;
  }
}

const Component: React.FunctionComponent<Props> = ({
  children,
  size = 'medium',
  bold = false,
}) => {
  const fontSize = getCorrespondingFontSize(size);
  return (
    <Text fontSize={fontSize} bold={bold}>
      {children}
    </Text>
  );
};

export default Component;
