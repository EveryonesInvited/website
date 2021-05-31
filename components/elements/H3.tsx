import { FC } from 'react';
import BaseHeading from './BaseHeading';

const H3: FC = ({ children }) => {
  return (
    <BaseHeading
      color="primary"
      as="h3"
      fontSize={[1, 2, 3, 3]}
      m={2}
      py={2}
      px={4}
    >
      {children}
    </BaseHeading>
  );
};

export default H3;
