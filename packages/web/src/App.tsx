import React from 'react';
import './App.css';
import { exampleService } from '@dolphub/common/lib/example';

const App: React.FC = () => {
  // const data = exampleService(['hello', 'world']);
  const data = exampleService(['hello']);

  const onComponentClick = (val, index) => () => {
    alert(`${val}: ${index}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <strong>Data: {123}</strong>
        {/* <AwesomeComponent data={data} onClick={onComponentClick} /> */}
      </header>
    </div>
  );
};

export default App;
