# react-use-toggle

[![CircleCI](https://circleci.com/gh/bsonntag/react-use-toggle.svg?style=svg)](https://circleci.com/gh/bsonntag/react-use-toggle)

React hook for toggle state.

## Usage

```js
import React from 'react';
import useToggle from 'react-use-toggle';

function Example() {
  const [checked, toggle] = useToggle(false);

  return (
    <label>
      <input
        checked={checked}
        onChange={toggle}
        type={'checkbox'}
      />

      Are you hooked?
    </label>
  );
}
```

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
