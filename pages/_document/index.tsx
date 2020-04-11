import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

class WebAppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900&display=swap&subset=cyrillic" rel="stylesheet"/>
        </Head>
        <body>
          <div className="wrapper">
            <Main/>
          </div>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default WebAppDocument;
