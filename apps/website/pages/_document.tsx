import * as Core from '@puch-app/core';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body style={{ backgroundColor: Core.Color.Background.Primary }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
