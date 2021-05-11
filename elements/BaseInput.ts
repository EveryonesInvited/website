import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

const BaseInput = styled.input<ColorProps>`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
  ::placeholder {
    ${color};
  }
  ${color}
`;

export default BaseInput;
