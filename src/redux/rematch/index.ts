import { init } from '@rematch/core';
// import { createLogger } from 'redux-logger';
import createLoadingPlugin from '@rematch/loading';
// add models
// import * as models from 'redux/models/News';

const loadingPlugin = createLoadingPlugin({ asNumber: false });
const reduxLoger = {
  redux:{}
};

if (process.env.NODE_ENV === 'development') {
  reduxLoger.redux = {
    // middlewares: [createLogger()],
  };
}
const store = init({
  // models,
  plugins: [loadingPlugin],
  ...reduxLoger.redux,
});
export default store;
