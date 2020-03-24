import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/layout';
import { useTranslation } from '../commons/i18n';

export default function IndexPage(props: any) {
  const [t, i18n] = useTranslation(['common', 'header']);
  console.log(props);
  console.log(i18n);
  return (
    <Layout>
      <H1>Hello Next.js 👋</H1>
      {t('greeting')}
      {t('greeting-name', { name: 'there' })}
      {t('header:name')}
      <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')
        }
      >
        Change locale
      </button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
}

IndexPage.getInitialProps = async () => {
  return {
    namespacesRequired: ['common', 'header']
  };
};

const H1 = styled.h1`
  color: blue;
  &:hover {
    color: red;
  }
`;
