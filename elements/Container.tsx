import { FC } from 'react';
import BaseContainer from './BaseContainer';

const Container: FC = ({ children }) => {
  return (
    <BaseContainer
      color="primary"
      m={4}
      py={4}
      px={4}
    >
      {children}
    </BaseContainer>
  );
};

export default Container;
