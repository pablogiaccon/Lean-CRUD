import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface IContainerProps {
  type: 'success' | 'error' | 'info';
}

const messagesVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div`
  z-index: 11;
  position: relative;
  width: max-content;
  min-width: 200px;
  max-width: 95%;
  margin: 0 auto;
`;

export const MessageItem = styled(animated.div)<IContainerProps>`
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 12px;
  padding: 8px;
  font-size: 14px;
  transition: 0.2s;

  ${props => messagesVariations[props.type]}

  > svg {
    margin: 4px 12px 0 0;
  }

  span {
    display: flex;
    flex-direction: column;
    margin-right: 3.2rem;
  }

  p {
    word-wrap: break-word;
    margin-top: 4px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 8px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
