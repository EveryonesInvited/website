import { FC } from 'react';
import BaseHeading from './BaseHeading';

interface HeadingProps {
  label: string;
}

const H1: FC<HeadingProps> = ({ label }) => {
  return (
    <BaseHeading
      color="primary"
      fontSize={[4, 6, 7, 8]}
      m={4}
      py={1}
      px={4}
    >
      {label}
    </BaseHeading>
  );
};

export default H1;
