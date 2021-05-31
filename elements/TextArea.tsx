import { FC, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

const BaseTextArea = styled.textarea<ColorProps>`
  outline: none;
  line-height: 1.5em;
  resize: none;
  box-sizing: border-box;
  width: 100%;
  &:focus {
    outline: none;
  }
  ${color};
  ${typography};
  ${space};
  ${border};
`;

const TextArea: FC<
  ColorProps &
    TypographyProps &
    SpaceProps &
    BorderProps &
    TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ children, color, bg, ...props }) => {
  return (
    <BaseTextArea
      color={color}
      bg={bg}
      fontSize={1}
      p={4}
      border="none"
      borderRadius="3px"
      {...props}
    >
      {children}
    </BaseTextArea>
  );
};

export default TextArea;
