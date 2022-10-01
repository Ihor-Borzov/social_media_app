import { render, screen } from '@testing-library/react';
import BaseAppComponent from './App';
import * as ReactDOM from 'react-dom';    // that was super important to import ReactDom manually

test('renders learn react link', () => {
  render(<BaseAppComponent />);
  debugger
  const linkElement = screen.getByText(/Profile/i)
  expect(linkElement).toBeInTheDocument();
});


test("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<BaseAppComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
})

// We create the tag div and render our App inside this tag, it was important manually import ReactDOM.