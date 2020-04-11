import { HOME } from '@constants';
import { IAction, IHomePage } from '@interfaces';

const initialState: IHomePage.State = {
  title: ''
};

export const HomeReducer = (
  state = initialState,
  action: IAction<IHomePage.Actions.Payload>
) => {
  switch (action.type) {
    case HOME.SET:
      return {
        ...state,
        ...action.payload
      };

    case HOME.RESET:
      return {
        title: ''
      };

    default:
      return state;
  }
};
