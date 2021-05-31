import { FC } from 'react';
import BaseHeading from './BaseHeading';

interface HeadingProps {
  label: string;
}

const H3: FC<HeadingProps> = ({ label }) => {
  return (
    <BaseHeading
      color="primary"
      as="h3"
      fontSize={[1, 2, 3, 3]}
      m={2}
      py={2}
      px={4}
    >
      {label}
    </BaseHeading>
  );
};

export default H3;
