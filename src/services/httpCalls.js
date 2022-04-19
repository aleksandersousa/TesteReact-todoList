import { api } from './api';

export const login = async (url, user) => {
  const res = await api.post(url, user);
  return res;
};

export const signup = async (url, user) => {
  const res = await api.post(url, user);
  return res;
};

export const saveTodo = async (url, user) => {
  const res = await api.put(url, user);
  return res;
};
