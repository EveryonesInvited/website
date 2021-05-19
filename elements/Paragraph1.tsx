import { FC } from 'react';
import BaseParagraph from './BaseParagraph';

interface ParagraphProps {
  // label: string;
}

const Paragraph1: FC<ParagraphProps> = ({ children }) => {
  return (
    <BaseParagraph
      color="primary"
      fontSize={[0.875, 0.875, 1, 1]}
      m={4}
      py={4}
      px={4}
    >
      {children}
    </BaseParagraph>
  );
};

export default Paragraph1;

//       {label}
