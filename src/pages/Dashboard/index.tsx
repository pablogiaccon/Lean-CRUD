import React, { useCallback, useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';

import {
  Container,
  HeaderWrapper,
  EmptyList,
  Title,
  Content,
  UsersList,
} from './styles';
import User, { IUserProps } from './User';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const [users, setUsers] = useState<IUserProps[]>([]);

  const handleLogout = useCallback(() => {
    history.push('/');
  }, [history]);

  const handleDeleteUser = useCallback(
    (id: string) => {
      const newListUsers = users.filter(user => user.id !== id);
      setUsers(newListUsers);

      localStorage.setItem('@Lean:users', JSON.stringify(newListUsers));

      addToast({
        type: 'success',
        title: 'Usuário deletado com sucesso!',
      });
    },
    [users],
  );
  useEffect(() => {
    const storagedUsers = localStorage.getItem('@Lean:users');

    if (storagedUsers) {
      const usersList = JSON.parse(storagedUsers);
      setUsers(usersList);
    }
  }, []);
  return (
    <Container>
      <HeaderWrapper>
        <header>
          <h2>Bem vindo!</h2>
          <span onClick={handleLogout} data-testid="goback-button">
            <FiPower />
          </span>
        </header>
      </HeaderWrapper>

      <Content>
        {users.length === 0 ? (
          <EmptyList>
            No momentos não temos nenhum usuário cadastrado, seja o primeiro!
            <Link to="/">Cadastrar! ☕</Link>
          </EmptyList>
        ) : (
          <Title>Estes são todos os usuários cadastrados!</Title>
        )}

        <UsersList>
          {users.map(user => (
            <User key={user.id} user={user} handleDelete={handleDeleteUser} />
          ))}
        </UsersList>
      </Content>
    </Container>
  );
};

export default Dashboard;
