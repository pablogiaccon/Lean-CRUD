import styled, { css } from 'styled-components';

interface IContainerProps {
  available: number;
}

export const Container = styled.button<IContainerProps>`
  background: #40c8f4;
  border: 0;
  padding: 0.8rem 4.2rem;
  border-radius: 15px;
  color: #ffff;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }

  ${props =>
    !props.available &&
    css`
      background: #f6f6f6;
      color: #dddcdc;
    `}
`;
