import { FC } from 'react';
import BaseHeading from './BaseHeading';

interface HeadingProps {
  label: string;
}

const Heading1: FC<HeadingProps> = ({ label }) => {
  return (
    <BaseHeading
      color="primary"
      fontSize={[4, 6, 7, 8]}
      m={4}
      py={1}
      px={4}
      // height="50px"
    >
      {label}
    </BaseHeading>
  );
};

export default Heading1;
