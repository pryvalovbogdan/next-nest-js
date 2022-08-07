import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { Books } from 'src/shared/types/books';

import { fetch } from '../shared/utils/fetch';

type THomeProps = {
  books: Books[];
};

const Home: FC<THomeProps> = ({ books = [] }) => {
  return (
    <div>
      <h1>Home1</h1>
      {books.map(({ title, id }) => (
        <div key={id}>
          <Link href={`/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  const books = await fetch(`/api/books`);
  console.log('books', books);
  return { props: { books } };
};

export default Home;
