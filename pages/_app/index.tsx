import * as React from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { AppWithStore } from '@interfaces';
import { makeStore } from '@redux';
import '@styles/index.scss';

class WebApp extends App<AppWithStore> {
  static async getInitialProps(
    {
      Component: Page,
      ctx
    }: AppContext
  ): Promise<AppInitialProps> {
    const pageProps = Page.getInitialProps
      ? await Page.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component: Page, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Page {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(WebApp);
