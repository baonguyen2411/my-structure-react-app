import axios from 'axios';
import moment from 'moment-timezone';

const instance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Timezone-Offset': moment.tz.guess(),
    Authorization: 'Bearer ',
  },
});

export default {
  getData: ({ url, responseType, params }) => {
    return instance({
      method: 'get',
      url,
      params,
      responseType,
    });
  },
  postData: ({ url, responseType, data }) => {
    return instance({
      method: 'post',
      url: url,
      data: data,
      responseType,
    });
  },
  putData: ({ url, responseType, data }) => {
    return instance({
      method: 'put',
      url: url,
      data: data,
      responseType,
    });
  },
  deleteData: ({ url }) => {
    return instance({
      method: 'delete',
      url: url,
    });
  },
  patchData: ({ url, responseType, data }) => {
    return instance({
      method: 'patch',
      url: url,
      data: data,
      responseType,
    });
  },
};
