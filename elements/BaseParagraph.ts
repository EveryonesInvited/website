import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

const BaseParagraph = styled.p<
  ColorProps & TypographyProps & SpaceProps & LayoutProps & BorderProps
>`
  ${typography};
  ${color};
  ${space};
  ${layout};
  ${border};
`;

export default BaseParagraph;
