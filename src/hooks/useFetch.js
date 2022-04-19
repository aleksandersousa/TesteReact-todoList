import { useEffect, useState } from 'react';
import { api } from '../services/api';

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching, error };
};
