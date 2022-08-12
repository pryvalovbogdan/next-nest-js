import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import { httpGet } from 'src/shared/utils/axiosConfig';

import { TBooksProps } from './types';

const Blog: FC<TBooksProps> = ({ book = {} }) => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>Book {book.title}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TBooksProps> = async ctx => {
  const id = ctx.query.id;
  const book = await httpGet(`/api/books/${id}`);

  return { props: { book } };
};

export default Blog;
