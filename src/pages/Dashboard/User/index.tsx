import React, { useCallback, useMemo, useState } from 'react';
import { FiCreditCard, FiMail, FiPhone, FiTrash, FiUser } from 'react-icons/fi';

import { Container } from './styles';

export interface IUserProps {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
}

interface IUserState {
  user: IUserProps;
  handleDelete(id: string): void;
}

const User: React.FC<IUserState> = ({ user, handleDelete }) => {
  const [onFocused, setFocused] = useState(false);

  const cpfFormatted = useMemo(() => {
    const str1 = user.cpf.slice(0, 3);
    const str2 = user.cpf.slice(3, 6);
    const str3 = user.cpf.slice(6, 9);
    const str4 = user.cpf.slice(9);

    return str1 + '.' + str2 + '.' + str3 + '-' + str4;
  }, []);

  const handleToggle = useCallback(() => {
    setFocused(state => !state);
  }, []);

  return (
    <Container onClick={handleToggle} hasFocus={onFocused ? 1 : 0}>
      <div>
        <FiTrash className="info" onClick={() => handleDelete(user.id)} />
        <strong>
          <FiUser /> {user.name.toUpperCase()}
        </strong>
        <p className="info">
          <FiMail /> <span>{user.email}</span>
        </p>

        <p className="info">
          <FiCreditCard /> <span>{cpfFormatted}</span>
        </p>

        <p className="info">
          <FiPhone /> <span>{user.phone}</span>
        </p>
      </div>
    </Container>
  );
};

export default User;
