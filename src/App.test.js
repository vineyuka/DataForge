// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DataForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DataForge/i);
    expect(titleElement).toBeInTheDocument();
});
