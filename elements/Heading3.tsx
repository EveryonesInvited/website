import { FC } from 'react';
import BaseHeading from './BaseHeading';

interface HeadingProps {
  label: string;
}

const Heading3: FC<HeadingProps> = ({ label }) => {
  return (
    <BaseHeading
      color="primary"
      fontSize={[1, 2, 3, 3]}
      m={2}
      py={2}
      px={4}
      // height="50px"
    >
      {label}
    </BaseHeading>
  );
};

export default Heading3;
