import React from 'react';
import { GoogleAuthContext, useGoogleAuth } from 'src/hooks/useGoogleAuth';

export const GoogleAuth = ({ children }) => {
  const { ...googleAuth } = useGoogleAuth();

  return (
    <GoogleAuthContext.Provider
      value={{
        ...googleAuth,
      }}
    >
      {children}
    </GoogleAuthContext.Provider>
  );
};
