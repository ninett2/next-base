import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return <Component {...pageProps} />;
}
