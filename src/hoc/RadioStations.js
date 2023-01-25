import React from 'react';
import { useRadioStations, RadioStationsContext } from 'src/hooks/useRadioStations.js';

export const RadioStations = ({ children }) => {
  const { stations } = useRadioStations();

  return (
    <RadioStationsContext.Provider value={{ stations }}>
      {children}
    </RadioStationsContext.Provider>
  );
};
