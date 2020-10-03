import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { Container, MessageItem } from './styles';
import { IToastMessage, useToast } from '../../../hooks/toast';

interface IToastProps {
  message: IToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
};

const Message: React.FC<IToastProps> = ({ style, message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container>
      <MessageItem style={style} type={message.type || 'info'}>
        {icons[message.type || 'info']}
        <span>
          <strong>{message.title}</strong>
          {message.description && <p>{message.description}</p>}
        </span>

        <button onClick={() => removeToast(message.id)} type="button">
          <FiXCircle size={18} />
        </button>
      </MessageItem>
    </Container>
  );
};

export default Message;
