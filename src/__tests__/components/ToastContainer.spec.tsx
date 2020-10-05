import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import ToastContainer from '../../components/ToastContainer';

const mockedMessages = [
  {
    id: 'test-id',
    title: 'Message test',
    description: 'Message test description',
  },
];

const mockedRemoveToast = jest.fn();

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      removeToast: mockedRemoveToast,
    }),
  };
});

describe('ToastContainer component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should be render a toast container', () => {
    const { getByTestId } = render(
      <ToastContainer messages={mockedMessages} />,
    );

    expect(getByTestId('toast')).toBeTruthy();
  });

  it('should be render a toast container with a toast message', () => {
    act(() => {
      global.innerWidth = 800;
    });

    const { getByTestId } = render(
      <ToastContainer messages={mockedMessages} />,
    );

    expect(getByTestId('web-toast')).toBeTruthy();
  });

  it('should be render a toast container with a toast message in mobile', () => {
    act(() => {
      global.innerWidth = 500;
    });

    const { getByTestId } = render(
      <ToastContainer messages={mockedMessages} />,
    );

    expect(getByTestId('mobile-toast')).toBeTruthy();
  });

  it('should delete a toast message in mobile', () => {
    act(() => {
      global.innerWidth = 500;
    });

    const { getByTestId } = render(
      <ToastContainer messages={mockedMessages} />,
    );

    const removeButton = getByTestId('remove-toast-mobile');

    fireEvent.click(removeButton);

    expect(mockedRemoveToast).toHaveBeenCalledTimes(1);
  });

  it('should delete a toast message in web page', () => {
    act(() => {
      global.innerWidth = 900;
    });

    const { getByTestId } = render(
      <ToastContainer messages={mockedMessages} />,
    );

    const removeButton = getByTestId('remove-toast-web');

    fireEvent.click(removeButton);

    expect(mockedRemoveToast).toHaveBeenCalledTimes(1);
  });
});
