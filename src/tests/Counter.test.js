import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter'; // Assuming Counter is in the components folder

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCountValue = screen.getByTestId('count');
  expect(initialCountValue).toHaveTextContent('0');
  // Complete the unit test below based on the objective in the line above
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText(/^\+$/);
  fireEvent.click(incrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  const incrementButton = screen.getByText(/^\+$/);
  fireEvent.click(incrementButton);

  const decrementButton = screen.getByText(/^\-$/);
  fireEvent.click(decrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
  // Complete the unit test below based on the objective in the line above
});
