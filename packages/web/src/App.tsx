import React from 'react';
import './App.css';
import { exampleService, BookDto } from '@dolphub/common';

import { AwesomeComponent } from '@dolphub/common-components';
import BooksComponent from './components/Books/BooksComponent';

import styled from 'styled-components';

const Header = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 500px;
  padding: 15px;
`;

const PageLayout = styled.body`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(78, 77, 191);
  align-items: center;
  overflow: hidden;
`;

const App: React.FC = () => {
  const data = exampleService(['hello world', 'noob']);
  const bookData: BookDto[] = [];

  const onComponentClick = (val, index) => () => {
    alert(`${val}: ${index}`);
  };

  return (
    <PageLayout>
      <Header>
        <strong>Data: {123}</strong>
        <AwesomeComponent data={data} onClick={onComponentClick} />
      </Header>
      <BooksComponent />
    </PageLayout>
  );
};

export default App;
