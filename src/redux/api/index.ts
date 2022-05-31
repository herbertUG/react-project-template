import axios from 'axios';
import config from '../config';

const _axios = axios.create({ withCredentials: false });

const withAuthHeader = {
  'Content-Type': 'application/json',
  // 'Access-Control-Allow-Origin': `${config.appURL()}`,
};

const get = (path:string) => {
  return _axios.get(`${config.appAPI()}/${path}`, {
    headers: withAuthHeader,
  });
};
const create = (path:string, data:{}) => {
  return _axios.post(
    `${config.appAPI()}/${path}`,
    { ...data },
    { headers: withAuthHeader }
  );
};

const update = (path:string, data:{}) => {
  return _axios.put(
    `${config.appAPI()}/${path}`,
    { ...data },
    { headers: withAuthHeader }
  );
};

const del = (path:string, data:{}) => {
  return _axios.delete(`${config.appAPI()}/${path}`, {
    data: { ...data },
    headers: withAuthHeader,
  });
};

export default {
  getRequest: get,
  createRequest: create,
  updateRequest: update,
  deleteRequest: del,
  appAPI: config.appAPI(),
  appURL: config.appURL(),
};
