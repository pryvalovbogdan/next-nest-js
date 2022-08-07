import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { Books } from 'src/shared/types/books';
import { fetch } from '../shared/utils/fetch';

type TBooksProps = {
  books: Books;
};

const Blog: FC<TBooksProps> = ({ books = {} }) => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>Blog {books.title}</h1>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getServerSideProps: GetServerSideProps<TBooksProps> = async (
  ctx,
) => {
  const id = ctx.query.id;
  const post = await fetch(`/api/books/${id}`);

  return { props: { post } };
};

export default Blog;
