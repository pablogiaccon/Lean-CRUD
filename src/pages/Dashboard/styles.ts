import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 5.4rem;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  background: #312e38;
  height: 10.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    width: 100%;
    padding: 0 4.2rem;

    h2 {
      color: #f4ede8;
    }

    span {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 1rem;
      background: #312e38;
      box-shadow: 1px 2px 20px #414141;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }

      svg {
        color: #f4ede8;
      }
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1024px;
  flex: 1;
  margin: 0 auto 2.4rem;
  padding: 0 2.4rem;
`;

export const EmptyList = styled.div`
  color: #312e38;
  font-size: 1.8rem;
  margin-top: 2.4rem;

  a {
    color: #40c8f4;
    margin-left: 1.2rem;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Title = styled.h2`
  color: #312e38;
  width: 100%;
  max-width: 1024px;
  margin: 2.4rem auto 5.6rem;
`;

export const UsersList = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
