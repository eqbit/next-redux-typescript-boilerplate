import React from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import { ReduxNextPageContext, IStore } from '@interfaces';
import PageWrapper from '@components/page-wraper';
import './style.scss';
import { homeActions } from '@redux/actions';

const Home: NextPage = () => {
  const home = useSelector((store: IStore) => store.home);
  
  return (
    <PageWrapper title={home.title}>
      <section className="section block-with-padding">
        <div className="container">
          {home.content}
        </div>
      </section>
    </PageWrapper>
  );
};

Home.getInitialProps = async (
  ctx: ReduxNextPageContext
): Promise<any> => {
  await ctx.store.dispatch(
    homeActions.getTitle()
  );
};

export default Home;
