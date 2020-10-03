import styled, { css } from 'styled-components';

interface IContainerProps {
  locationToast: number;
}

export const Container = styled.div<IContainerProps>`
  position: absolute;
  top: 0;
  padding-top: 3rem;
  overflow: hidden;
  right: 0;
  left: 0;

  ${props =>
    !props.locationToast &&
    css`
      left: auto;
    `}
`;
