import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://de1.api.radio-browser.info/',
  withCredentials: false,
});

export const createRequest = async ({
  headers = {},
  method = 'GET',
  url,
  data,
  params,
  responseType,
}) => {
  const options = {
    headers,
    method,
    params,
    responseType,
    data,
    url: `json/${url}`,
  };

  return await axiosInstance(options);
};

