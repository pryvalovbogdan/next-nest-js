import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';

import { Flex } from 'src/client/styledSystem';
import { httpGet } from 'src/shared/utils/axiosConfig';

import { THomeProps } from './types';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.black};
`;

const Home: FC<THomeProps> = props => {
  return (
    <div>
      <Head>
        <title>Books app</title>
        <link rel='icon' href='/public/favicon.png' />
      </Head>
      <Flex flexDirection='column'>
        <Title>Home page</Title>
        <Flex>is it</Flex>
        {props.books.map(({ title, id }) => (
          <div key={id}>
            <Link href={`/${id}`}>{title}</Link>
          </div>
        ))}
      </Flex>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<THomeProps> = async () => {
  const books = await httpGet(`/api/books`);

  return { props: { books } };
};

export default Home;
