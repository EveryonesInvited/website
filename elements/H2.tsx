import { FC } from 'react';
import BaseHeading from './BaseHeading';

interface HeadingProps {
  label: string;
}

const H2: FC<HeadingProps> = ({ label }) => {
  return (
    <BaseHeading
      color="primary"
      as="h2"
      fontSize={[2, 3, 4, 5]}
      m={2}
      py={2}
      px={4}
    >
      {label}
    </BaseHeading>
  );
};

export default H2;
