import { render } from '@testing-library/react';
import React from 'react';
import Tooltip from '../../components/Tooltip';

describe('Tooltip component', () => {
  it('should be able to render a tooltip', () => {
    const { getByText } = render(<Tooltip title="Testing" />);

    expect(getByText('Testing')).toBeTruthy();
  });
});
