import React from 'react';
import { useTransition } from 'react-spring';

import { IToastMessage } from '../../hooks/toast';

import { Container } from './styles';
import Toast from './Toast';
import Message from './Message';

interface IToastContainerProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  const messagesMobileWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { top: '-120%', opacity: 0 },
      enter: { top: '0%', opacity: 1 },
      leave: { top: '-120%', opacity: 0 },
    },
  );

  return (
    <Container locationToast={window.innerWidth < 768 ? 1 : 0}>
      {window.innerWidth < 768
        ? messagesMobileWithTransitions.map(({ item, key, props }) => (
            <Message key={key} message={item} style={props} />
          ))
        : messagesWithTransitions.map(({ item, key, props }) => (
            <Toast key={key} message={item} style={props} />
          ))}
    </Container>
  );
};

export default ToastContainer;
