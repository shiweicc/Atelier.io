import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RnR from './index.jsx';
import ReviewList from './RnRComponents/ReviewList.jsx';
import RatingsBreakdown from './RnRComponents/RatingsBreakdown.jsx';
import CharacteristicsBreakdown from './RnRComponents/CharacteristicsBreakdown.jsx';

describe('tests for rendering component', () => {
  test('tests rendering of RnR component', () => {
    render(<RnR />);
    expect(screen.getByText(/This is the index file!/i)).toBeInTheDocument();
  })
  test('tests rendering of RnR component', () => {
    render(<ReviewList />);
    expect(screen.getByText(/This is the review list!/i)).toBeInTheDocument();
  })
  test('tests rendering of RnR component', () => {
    render(<RatingsBreakdown />);
    expect(screen.getByText(/This is the ratings breakdown!/i)).toBeInTheDocument();
  })
  test('tests rendering of RnR component', () => {
    render(<CharacteristicsBreakdown />);
    expect(screen.getByText(/This is the characteristics breakdown!/i)).toBeInTheDocument();
  })
})