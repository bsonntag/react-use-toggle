import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from '.';

test('should return false as the initial state', () => {
  const { result } = renderHook(() => useToggle());
  const [value] = result.current;

  expect(value).toBe(false);
});

test('should return the specified initial state', () => {
  const { result } = renderHook(() => useToggle(true));
  const [value] = result.current;

  expect(value).toBe(true);
});

test('should update the state when the toggle function is invoked', () => {
  const { result } = renderHook(() => useToggle());
  const [, toggle] = result.current;

  act(() => {
    toggle();
  });

  const [value] = result.current;

  expect(value).toBe(true);
});
