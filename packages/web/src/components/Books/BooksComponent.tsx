import React, { FC, Fragment, Component } from 'react';
import { BookDto } from '@dolphub/common';
import { Book } from './Book';

import BookService from '../../services/books';

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
    const data = BookService.getBooks();
  };
  render() {
    return (
      <Fragment>
        <div>{JSON.stringify(this.state.bookData)}</div>
        <Book />
      </Fragment>
    );
  }
}

export default BooksComponent;
