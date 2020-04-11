import * as React from 'react';
import { NextPage } from 'next';
import { IErrorPage } from '@interfaces';
import PageWrapper from '@components/page-wraper';

const Error: NextPage<IErrorPage.Props> = ({ statusCode }) => {
  return (
    <PageWrapper title={`Ошибка ${statusCode}`}>
      {statusCode}
    </PageWrapper>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    statusCode
  };
};

export default Error;
