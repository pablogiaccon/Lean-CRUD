import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  available?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  available = true,
  ...rest
}) => {
  return (
    <Container type="button" {...rest} available={available ? 1 : 0}>
      {children}
    </Container>
  );
};

export default Button;
