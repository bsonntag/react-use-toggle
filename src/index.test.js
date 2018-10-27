import { fireEvent, render } from 'react-testing-library';
import React from 'react';
import useToggle from '.';

const Test = ({ defaultOn }) => {
  const [on, toggle] = useToggle(defaultOn);

  return (
    <button onClick={toggle}>
      {on ? 'on' : 'off'}
    </button>
  );
};

test('should return false as the initial state', () => {
  const { container } = render(<Test />);

  expect(container.firstChild.textContent).toBe('off');
});

test('should return specified initial state', () => {
  const { container } = render(<Test defaultOn />);

  expect(container.firstChild.textContent).toBe('on');
});

test('should update the state', () => {
  const { container } = render(<Test />);
  const button = container.firstChild;

  expect(button.textContent).toBe('off');

  fireEvent.click(button);

  expect(button.textContent).toBe('on');
});
