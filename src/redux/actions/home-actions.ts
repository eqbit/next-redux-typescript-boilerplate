import { Dispatch } from 'redux';
import { HOME } from '@constants';

export const homeActions = {
  getTitle: () => async (dispatch: Dispatch) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Next.js | Typescript | Redux boilerplate by eqbit.tech');
      }, 10);
    });
    
    const title = await promise;
    
    dispatch({
      type: HOME.SET,
      payload: {
        title
      }
    });
  }
};
