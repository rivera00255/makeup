import React from 'react';
import { Global } from '@emotion/react';
import reset from './style/reset';

function App() {
  return (
    <div>
      <Global styles={reset} />
      hello!
    </div>
  );
}

export default App;
