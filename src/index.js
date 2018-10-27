import { useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(state => !state);

  return [state, toggle];
}

export default useToggle;
