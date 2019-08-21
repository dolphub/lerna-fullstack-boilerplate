import React from 'react';
import './App.css';
import { exampleService, BookDto } from '@dolphub/common';

import { AwesomeComponent } from '@dolphub/common-components';

const App: React.FC = () => {
  const data = exampleService(['hello world', 'noob']);
  const bookData: BookDto[] = [];

  const onComponentClick = (val, index) => () => {
    alert(`${val}: ${index}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <strong>Data: {123}</strong>
        <AwesomeComponent data={data} onClick={onComponentClick} />
      </header>
    </div>
  );
};

export default App;
