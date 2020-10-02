import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
`;

export const OverlayImage = styled.div`
  background: no-repeat center;
  flex: 1;
  position: relative;

  cursor: pointer;

  img {
    width: 100%;
    height: 100vh;
  }

  &:before {
    content: '';
    background: #40c8f4;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    transition: 1s;
    opacity: 0;
  }

  &:hover:before {
    opacity: 0.7;
  }
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px)
  }
  to{
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  padding: 3.2rem;

  animation: ${appearFromLeft} 1s;

  h2 {
    color: #414141;
    text-align: left;
    margin-bottom: 4.2rem;
    font-weight: normal;
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8rem;
  margin-top: 3.2rem;

  a {
    display: flex;
    align-items: center;
    color: #999999;
    svg {
      margin-left: 0.8rem;
    }
  }
`;
