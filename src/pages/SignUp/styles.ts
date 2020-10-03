import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
  position: relative;
`;

const overlayImage = keyframes`
  from{
    background: #40c8f4;
  }
  to{
    background: #2179b5;
  }
`;

export const OverlayImage = styled.div`
  background: no-repeat center;
  flex: 1;
  position: relative;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  &:before {
    content: '';

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
    animation: ${overlayImage} forwards;
  }

  @media (max-width: 900px) {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    z-index: -10;

    opacity: 0.2;
  } ;
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
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;

  width: 30%;
  padding: 3.2rem;

  animation: ${appearFromLeft} 1s;

  h2 {
    color: #312e38;
    text-align: left;
    margin-bottom: 4.2rem;
    font-weight: normal;
  }

  @media (max-width: 900px) {
    width: 100%;

    padding: 5.6rem;
  }

  @media (min-width: 1440px) {
    margin-top: 10.4rem;
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
