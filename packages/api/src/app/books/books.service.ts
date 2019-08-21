import { Injectable } from '@nestjs/common';
import { books } from './bookdata';
import { BookDto } from '@dolphub/common';

@Injectable()
export class BooksService {
  async getAllBooks(): Promise<BookDto[]> {
    return books;
  }
}
