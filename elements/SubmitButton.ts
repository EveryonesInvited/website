import styled from 'styled-components';
import BaseButton from './BaseButton';
import { color, ColorProps, typography, TypographyProps } from 'styled-system';

const SubmitButton = styled(BaseButton)<ColorProps & TypographyProps>`
  // font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: none;
  width: 30%;
  height: 50px;
  resize: vertical;
  ${typography};
  ${color}
`;

export default SubmitButton;
