import { render } from 'react-dom';
import React from 'react';
import useToggle from '../src';

const Example = () => {
  const [on, toggle] = useToggle(false);
  const [cool, toggleCool] = useToggle(true);

  return (
    <>
      <button onClick={toggle}>{on ? 'On' : 'Off'}</button>
      <button onClick={toggleCool}>{cool ? 'Cool' : 'Meh'}</button>
    </>
  );
};

render(<Example />, document.getElementById('root'));
