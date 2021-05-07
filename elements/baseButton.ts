import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

const baseButton = styled.button<ColorProps>`
  font-size: 10em;
  ${color};
`;

export default baseButton;
