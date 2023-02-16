import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import JSApp from './App';

// test('renders learn react link', () => {
//   render(<JSApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
