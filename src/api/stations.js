import { createRequest } from 'src/api/index.js';

export const getAllStations = async () => {
  const { data } = await createRequest({
    url: 'stations',
    params: {
      limit: 20,
    }
  });

  return data;
};
