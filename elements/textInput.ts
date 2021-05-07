import styled from 'styled-components';
import baseInput from './baseInput';
import { color, ColorProps } from 'styled-system';

const textInput = styled.textarea<ColorProps>`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  outline: none;
  border: none;
  padding: 1rem 1rem;
  line-height: 1.5;
  vertical-align: middle;
  box-sizing: border-box;
  resize: none;
  width: 100%;
  &:focus {
    outline: none;
  }
  ${color}
`;

export default textInput;
