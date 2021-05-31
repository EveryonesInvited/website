import { FC } from 'react';
import BaseHeading from './BaseHeading';

const H1: FC = ({ children }) => {
  return (
    <BaseHeading
      color="primary"
      fontSize={[4, 6, 7, 8]}
      m={4}
      py={1}
      px={4}
    >
      {children}
    </BaseHeading>
  );
};

export default H1;
