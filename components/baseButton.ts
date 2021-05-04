import styled from "styled-components";
import { color, ColorProps } from "styled-system";

export const Button = styled.button<ColorProps>`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: 10em;
  ${color};
`;