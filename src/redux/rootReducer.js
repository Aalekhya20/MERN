// rootReducer.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authSlice from './features/auth/authSlice';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  auth: authSlice,
  router: connectRouter(history),
});

export default rootReducer;