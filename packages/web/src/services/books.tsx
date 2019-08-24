export * from './books';

import axios from 'axios';
import { BookDto } from '@dolphub/common';

const baseUrl = 'http://localhost:3001';

class BookService {
  async getBooks(): Promise<BookDto[]> {
    try {
      const baseUrl = 'http://localhost:3001/books';
      const { data, status } = await axios.get(baseUrl);
      if (status < 200 || status > 399) {
        throw new Error(data);
      }
      return data;
    } catch (e) {
      console.warn('error', e);
      throw e;
    }
  }
}

export default new BookService();
