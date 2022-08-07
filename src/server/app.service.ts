import { Injectable, NotFoundException } from '@nestjs/common';
import { from, of, toArray } from 'rxjs';

const BOOKS = [
  { title: 'Lorem Ipsum', id: 1 },
  { title: 'Dolore Sit', id: 2 },
  { title: 'Ame', id: 3 },
];

@Injectable()
export class AppService {
  getBooks() {
    return from(BOOKS).pipe(toArray());
  }

  getBook(bookId: number) {
    const book = BOOKS.find(({ id }) => id === bookId);

    if (!book) {
      throw new NotFoundException();
    }

    return of(book);
  }
}
