import React, { FC, Fragment } from 'react';
import { BookDto } from '@dolphub/common';

import styled from 'styled-components';

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 15px;
  background-color: rgb(224, 234, 255);
  padding: 15px;
  width: 400px;
  height: 300px;
  margin: 15px;
`;

const BookTitle = styled.h3`
  font-weight: bold;
  font-size: 1.3em;
`;

const BookSubtitle = styled.div`
  font-style: italic;
  font-size: 1.1em;
`;

const BookBody = styled.h6`
  font-size: 1em;
`;

export interface BookProps {
  data?: BookDto;
  onClick?: () => {};
}

export const Book: React.FC<BookProps> = ({ data, onClick }: BookProps) => {
  if (!data) {
    return null;
  }
  return (
    <BookContainer>
      <BookTitle>{data.title}</BookTitle>
      <BookSubtitle>{data.subtitle}</BookSubtitle>
      <BookBody>
        <p>{data.author}</p>
        <p>{data.isbn}</p>
        <p>Pages: {data.pages}</p>
      </BookBody>
    </BookContainer>
  );
};
