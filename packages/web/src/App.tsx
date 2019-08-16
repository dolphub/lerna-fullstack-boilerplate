import React from 'react';
import './App.css';
import AwesomeComponent from '@dolphub/common-components/src/example/example.component';

// import { exampleService } from '@dolphub/common';

const App: React.FC = () => {
  // const data = exampleService(['hello', 'world']);\
  const data = ['hello', 'world'];

  return (
    <div className="App">
      <header className="App-header">
        <strong>Data: {1234}</strong>
        <AwesomeComponent data={data} onClick={val => () => alert(val)} />
      </header>
    </div>
  );
};

export default App;
