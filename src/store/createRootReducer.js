import { combineReducers } from 'redux';

import userReducer, { ROOT_STATE_NAME as USER } from '../slices/user';

export default function createRootReducer() {
  const rootReducer = combineReducers({
    [USER]: userReducer,
  });

  return rootReducer;
}
