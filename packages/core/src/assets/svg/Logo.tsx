import styled from '@emotion/styled';
import { Unit } from '../../types';

const Container = styled.div({
  width: Unit.XXL,
  height: Unit.XXL,
});

const Logo: React.FunctionComponent = () => (
  <Container>
    <svg
      viewBox='0 0 87.5 87.5'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
    >
      <path
        strokeWidth='0'
        d='M 25 87.5 L 0 87.5 L 0 0 L 75 0 L 75 12.5 L 87.5 12.5 L 87.5 50 L 75 50 L 75 62.5 L 25 62.5 L 25 87.5 Z M 25 12.5 L 25 50 L 62.5 50 L 62.5 12.5 L 25 12.5 Z'
      />
    </svg>
  </Container>
);

export default Logo;
