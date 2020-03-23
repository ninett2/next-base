import Link from 'next/link';
import styled from 'styled-components';

const IndexPage = () => (
  <div>
    <H1>Hello Next.js 👋</H1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;

const H1 = styled.h1`
  color: blue;
  &:hover {
    color: red;
  }
`;
