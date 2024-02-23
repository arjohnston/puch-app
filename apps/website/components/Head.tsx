import Head from 'next/head';

export default ({
  pageTitle = 'Puch',
  pageDescription = 'Le Puch App.',
  canonical = '/',
}: {
  pageTitle?: string;
  pageDescription?: string;
  canonical?: string;
}) => (
  <Head>
    <meta httpEquiv='Content-Type' content='text/html; charSet=UTF-8' />
    <meta
      name='viewport'
      content='initial-scale=1.0, width=device-width, shrink-to-fit=no'
    />
    <title>{`${pageTitle} | Puch`}</title>
    <meta name='description' content={pageDescription} />
    <link rel='canonical' href={`https://www.puch.app${canonical}`} />
    <link rel='author' href='/humans.txt' />

    <link rel='dns-prefetch' href='https://puch.app/' />
    <link rel='preconnect' href='https://www.puch.app/' />
    <link rel='prefetch' href='https://www.puch.app/' />
    <link rel='prerender' href='https://www.puch.app/' />

    <meta name='robots' content='index,follow,noodp' />
    <meta name='googlebot' content='index,follow' />
    <meta name='url' content='https://www.puch.app/' />
    <meta name='coverage' content='Worldwide' />
    <meta name='rating' content='General' />
    <meta name='copyright' content='Puch' />

    <link rel='shortcut icon' href='/icons/favicon.ico' />
  </Head>
);
