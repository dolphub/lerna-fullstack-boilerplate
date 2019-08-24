import React, { FC, Fragment, Component } from 'react';
import { BookDto } from '@dolphub/common';
import { Book } from './Book';

import BookService from '../../services/books';

import styled from 'styled-components';

const BooksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export interface BooksComponentProps {
  // data: BookDto[];
}

export interface BookComponentState {
  bookData: BookDto[];
}

class BooksComponent extends Component<
  BooksComponentProps,
  BookComponentState
> {
  state = {
    bookData: [],
  };
  componentDidMount = async () => {
    const bookData = await BookService.getBooks();
    console.log(bookData);
    this.setState({ bookData });
  };

  renderBooks = () => {
    const { bookData } = this.state;

    if (!bookData.length) {
      return null;
    }

    return bookData.map((book, i) => <Book key={i} data={book} />);
  };

  render() {
    const { bookData } = this.state;
    if (!bookData.length) {
      return null;
    }
    return <BooksContainer>{this.renderBooks()}</BooksContainer>;
  }
}

export default BooksComponent;
