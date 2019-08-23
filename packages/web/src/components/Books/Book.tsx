import React, { FC, Fragment } from 'react';
import { BookDto } from '@dolphub/common';

import styled from 'styled-components';

const BookContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 25px;
  background-color: rgb(224, 234, 255);
  padding: 15px;
`;

const BookTitle = styled.h3`
  font-weight: bold;
  font-size: 1.3em;
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
    </BookContainer>
  );
};
