import { FC } from 'react';
import BaseButton from './BaseButton';

interface ButtonProps {
  label: string;
}

const SubmitButton: FC<ButtonProps> = ({ label }) => {
  return (
    <BaseButton
      type="submit"
      color="primary"
      bg="secondary"
      fontSize={3}
      m={4}
      py={1}
      px={4}
      height="50px"
      width="30%"
      border="none"
      borderRadius="3px"
    >
      {label}
    </BaseButton>
  );
};

export default SubmitButton;
