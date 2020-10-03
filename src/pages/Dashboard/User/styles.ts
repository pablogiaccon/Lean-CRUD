import styled, { css } from 'styled-components';

interface IContainerProps {
  hasFocus: number;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 5.6rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px #414141;

  background: #2079b5;
  color: #fff;

  transition: 4s;
  cursor: pointer;

  display: flex;

  div {
    flex: 1;
    padding: 1.2rem;
    position: relative;
    border-radius: 10px;
    background: #2079b5;
    width: 100%;

    > svg {
      position: absolute;
      top: 1.2rem;
      right: 1.2rem;
      color: #f4ede8;

      &:hover {
        color: #312e38;
      }
    }

    strong {
      font-size: 1.8rem;
      font-weight: bold;
      align-self: flex-start;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      svg {
        margin-right: 1.2rem;
      }
    }

    p {
      display: flex;
      align-items: center;

      margin-top: 2.4rem;

      svg {
        margin-right: 1.2rem;
      }

      & + p {
        margin-top: 1.2rem;
      }
    }

    .info {
      ${props =>
        !props.hasFocus &&
        css`
          display: none;
        `}
    }

    ${props =>
      !!props.hasFocus &&
      css`
        height: max-content;
        z-index: 10;
        overflow: hidden;

        box-shadow: 0 2px 10px #414141;
      `}
  }
`;
