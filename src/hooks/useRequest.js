import { useCallback, useEffect, useState } from 'react';

const RequestStatus = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

export const useRequest = (request, immediate = true) => {
  const [status, setStatus] = useState(RequestStatus.IDLE);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setStatus(RequestStatus.PENDING);

    try {
      const response = await request();
      setValue(response);
      setStatus(RequestStatus.FULFILLED);
    } catch (error) {
      setError(error);
      setStatus(RequestStatus.REJECTED);
    }
  }, [request]);


  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error, isLoaded: status === RequestStatus.FULFILLED };
};
