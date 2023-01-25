import { createContext, useContext } from 'react';
import { getAllStations } from 'src/api/stations.js';
import { useRequest } from './useRequest.js';

export const RadioStationsContext = createContext({});

export const useRadioStationsContext = () => useContext(RadioStationsContext);

export const useRadioStations = () => {
  const { value } = useRequest(getAllStations);

  return {
    stations: value,
  };
};
