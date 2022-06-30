import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RnR from './index.jsx';

test('tests rendering of RnR component', () => {
  render(<RnR />);
  expect(screen.getByText(/This is Ratings and Reviews!/i)).toBeInTheDocument();
})