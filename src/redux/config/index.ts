const production_api = '';
const appAPI = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return process.env.REACT_APP_API_DEV || production_api;
  }
  return process.env.REACT_APP_API_PROD || production_api;
};
const appURL = () => {
  return process.env.REACT_APP_URL;
};
export default {
  appAPI,
  appURL,
};
