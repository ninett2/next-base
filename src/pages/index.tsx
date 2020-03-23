import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <H1>Hello Next.js 👋</H1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
}

const H1 = styled.h1`
  color: blue;
  &:hover {
    color: red;
  }
`;
