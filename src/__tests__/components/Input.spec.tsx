import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input component', () => {
  // it('should be able to render an input', () => {
  //   const { getByPlaceholderText } = render(
  //     <Input name="email" label="E-mail" placeholder="E-mail" />,
  //   );

  //   expect(getByPlaceholderText('E-mail')).toBeTruthy();
  // });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText } = render(
      <Input name="email" label="E-mail" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(inputElement).toHaveStyle('color: #555555;');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(inputElement).toHaveStyle('color: #efeeed;');
    });
  });
});
