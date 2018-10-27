import { fireEvent, render } from 'react-testing-library';
import React from 'react';
import useToggle from '.';

const Test = () => {
  const [on, toggle] = useToggle(false);

  return (
    <button onClick={toggle}>
      {on ? 'on' : 'off'}
    </button>
  );
};

test('should return the initial state', () => {
  const { container } = render(<Test />);

  expect(container.firstChild.textContent).toBe('off');
});

test('should update the state', () => {
  const { container } = render(<Test />);
  const button = container.firstChild;

  expect(button.textContent).toBe('off');

  fireEvent.click(button);

  expect(button.textContent).toBe('on');
});
