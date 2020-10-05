import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUp from '../../pages/SignUp';

const mockedHistoryPush = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

describe('SignUp Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
    mockedAddToast.mockClear();
  });
  it('should be able to sign up.', async () => {
    const { getByTestId, getByText } = render(<SignUp />);

    const nameField = getByTestId('input-name');
    const emailField = getByTestId('input-email');
    const cpfField = getByTestId('input-cpf');
    const phoneField = getByTestId('input-phone');

    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@email.com' } });
    fireEvent.change(cpfField, { target: { value: '122.055.566-57' } });
    fireEvent.change(phoneField, { target: { value: '33333333' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should display an welcome message.', async () => {
    const { getByTestId, getByText } = render(<SignUp />);

    const nameField = getByTestId('input-name');
    const emailField = getByTestId('input-email');
    const cpfField = getByTestId('input-cpf');
    const phoneField = getByTestId('input-phone');

    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'johndoe@email.com' } });
    fireEvent.change(cpfField, { target: { value: '122.055.566-57' } });
    fireEvent.change(phoneField, { target: { value: '33333333' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalled();
    });
  });

  it('should display an message if click in background image.', async () => {
    const { getByTestId } = render(<SignUp />);

    const backgroundImg = getByTestId('background-img');

    fireEvent.click(backgroundImg);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalled();
    });
  });

  it('should not be able to sign up with invalid credentials.', async () => {
    const { getByTestId, getByText } = render(<SignUp />);

    const nameField = getByTestId('input-name');
    const emailField = getByTestId('input-email');
    const cpfField = getByTestId('input-cpf');
    const phoneField = getByTestId('input-phone');

    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'invalidname1' } });
    fireEvent.change(emailField, { target: { value: 'invalid-email' } });
    fireEvent.change(cpfField, { target: { value: '122.055.566-57' } });
    fireEvent.change(phoneField, { target: { value: '33333333' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled;
    });
  });

  it('should not be able to sign up with empty input.', async () => {
    const { getByTestId, getByText } = render(<SignUp />);

    const nameField = getByTestId('input-name');
    const emailField = getByTestId('input-email');
    const cpfField = getByTestId('input-cpf');
    const phoneField = getByTestId('input-phone');

    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: '' } });
    fireEvent.change(emailField, { target: { value: 'teste@teste.com' } });
    fireEvent.change(cpfField, { target: { value: '122.055.566-57' } });
    fireEvent.change(phoneField, { target: { value: '33333333' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled;
    });
  });

  it('should not be able to sign up with invalid cpf.', async () => {
    const { getByTestId, getByText } = render(<SignUp />);

    const nameField = getByTestId('input-name');
    const emailField = getByTestId('input-email');
    const cpfField = getByTestId('input-cpf');
    const phoneField = getByTestId('input-phone');

    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.change(emailField, { target: { value: 'teste@teste.com' } });
    fireEvent.change(cpfField, { target: { value: '111.111.111-11' } });
    fireEvent.change(phoneField, { target: { value: '33333333' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled;
    });
  });
});
