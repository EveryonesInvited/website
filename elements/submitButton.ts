import styled from 'styled-components';
import baseButton from './baseButton';
import { color, ColorProps } from 'styled-system';

const SubmitButton = styled(baseButton)<ColorProps>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: none;
  width: 30%;
  height: 50px;
  resize: vertical;
  ${color}
`;

export default SubmitButton;
