import { FC } from 'react';
import BaseHeading from './BaseHeading';

interface HeadingProps {
  label: string;
}

const Heading2: FC<HeadingProps> = ({ label }) => {
  return (
    <BaseHeading
      color="primary"
      fontSize={[2, 3, 4, 5]}
      m={2}
      py={2}
      px={4}
    >
      {label}
    </BaseHeading>
  );
};

export default Heading2;
