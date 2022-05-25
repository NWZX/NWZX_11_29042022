import React from 'react';
import { screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
    <App />;
    const linkElement = screen.getByText(/learn chakra/i);
    expect(linkElement).toBeInTheDocument();
});
