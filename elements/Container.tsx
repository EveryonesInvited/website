import { FC } from 'react';
import BaseContainer from './BaseContainer';

interface Props {
  // label: string;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <BaseContainer
      color="primary"
      m={4}
      py={4}
      px={4}
      // height="50px"
    >
      {children}
    </BaseContainer>
  );
};

export default Container;
