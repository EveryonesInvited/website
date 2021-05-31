import { FC } from 'react';
import { Color } from '../styles/theme';
import BaseParagraph from './BaseParagraph';

interface ParagraphProps {
  color?: Color
}
const Paragraph1: FC<ParagraphProps> = ({ children, color = "primary" }) => {
  return (
    <BaseParagraph
      color={color}
      fontSize={[0.875, 0.875, 1, 1]}
      m={2}
      py={4}
      px={4}
    >
      {children}
    </BaseParagraph>
  );
};

export default Paragraph1;

