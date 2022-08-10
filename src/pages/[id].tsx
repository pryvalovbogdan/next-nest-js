import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { Books } from 'src/shared/types/books';
import { httpGet } from '../shared/utils/axiosConfig';

type TBooksProps = {
  book: Books;
};

const Blog: FC<TBooksProps> = ({ book = {} }) => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>Book {book.title}</h1>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getServerSideProps: GetServerSideProps<TBooksProps> = async ctx => {
  const id = ctx.query.id;
  const book = await httpGet(`/api/books/${id}`);

  return { props: { book } };
};

export default Blog;
