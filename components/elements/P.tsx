import { FC } from 'react';
import styled from 'styled-components';
import {
  ColorProps,
  TypographyProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  typography,
  color,
  space,
  layout,
  border,
} from 'styled-system';
import { Color } from '../../styles/theme';

const BaseParagraph = styled.p<
  ColorProps & TypographyProps & SpaceProps & LayoutProps & BorderProps
>`
  ${typography};
  ${color};
  ${space};
  ${layout};
  ${border};
`;

interface ParagraphProps {
  color?: Color;
}
const P: FC<ParagraphProps> = ({ children, color = 'primary' }) => {
  return (
    <BaseParagraph color={color} fontSize={[1, 1, 2, 3]} m={2} py={4} px={4}>
      {children}
    </BaseParagraph>
  );
};

export default P;
