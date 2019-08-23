export * from './books';

import axios from 'axios';
import { BookDto } from '@dolphub/common';

const baseUrl = 'http://localhost:3001';

class BookService {
  async getBooks(): Promise<BookDto[]> {
    const { data, status } = await axios.get(`{baseUrl}/books`);
    if (status < 200 || status > 399) {
      throw new Error(data);
    }
    return data;
  }
}

export default new BookService();
