import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { Books } from 'src/shared/types/books';

import { httpGet } from '../shared/utils/axiosConfig';
import Head from 'next/head';
import styled from 'styled-components';

type THomeProps = {
  books: Books[];
};

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: FC<THomeProps> = props => {
  console.log('pro21ps123', props);
  return (
    <div>
      <Head>
        <title>Books app</title>
        <link rel='icon' href='/public/favicon.png' />
      </Head>
      <Title>Home1qdw2312</Title>
      {props.books.map(({ title, id }) => (
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
  const books = await httpGet(`/api/books`);
  console.log('books', books);
  return { props: { books } };
};

export default Home;
