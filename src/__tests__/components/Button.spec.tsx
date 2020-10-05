import { render } from '@testing-library/react';
import React from 'react';

import Button from '../../components/Button';

describe('Button component', () => {
  it('should be render a button', () => {
    const { getByText } = render(<Button>Testing</Button>);

    expect(getByText('Testing')).toBeTruthy();
  });
});
