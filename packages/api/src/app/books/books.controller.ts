import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

import { BookDto } from '@dolphub/common';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get('')
  getBooks(): Promise<BookDto[]> {
    return this.bookService.getAllBooks();
  }
}
