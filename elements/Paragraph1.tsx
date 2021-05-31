import { FC } from 'react';
import BaseParagraph from './BaseParagraph';

const Paragraph1: FC = ({ children }) => {
  return (
    <BaseParagraph
      color="primary"
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

