import React from 'react';

import { fireEvent, render, waitFor } from '@testing-library/react';

import Dashboard from '../../pages/Dashboard';

const mockedHistoryPush = jest.fn();
const mockedAddToast = jest.fn();
const mockedUsersList = [
  {
    id: 'test-id',
    name: 'John Doe',
    email: 'johndoe@example.com',
    cpf: '12212212212',
    phone: '33333333',
  },
];

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

describe('Dashboard page', () => {
  it('should be able to list all users', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      return JSON.stringify(mockedUsersList);
    });

    const { getByText } = render(<Dashboard />);

    const userItem = getByText('John Doe');

    expect(userItem).toBeTruthy();
  });

  it('should be able to delete an user', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      return JSON.stringify(mockedUsersList);
    });

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { getByTestId } = render(<Dashboard />);

    const deleteButton = getByTestId('delete-user');

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledTimes(1);
      expect(mockedAddToast).toHaveBeenCalledTimes(1);
    });
  });

  it('should be able to go to sign up page', () => {
    const { getByTestId } = render(<Dashboard />);

    const goBackButton = getByTestId('goback-button');

    fireEvent.click(goBackButton);

    expect(mockedHistoryPush).toHaveBeenCalledTimes(1);
  });
});
