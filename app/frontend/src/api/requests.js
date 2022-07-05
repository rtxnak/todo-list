import axios from 'axios';

const url = "http://localhost:3001/"

const api = axios.create({
  baseURL: url
});

export const getAll = async () => {
  const { data } = await api.get('/');
  return data;
};

export const createTask = async (task) => {
  const { data } = await api.post('/', task);
  return data;
};

export const updateTask = async (task) => {
  const { data } = await api.put('/', task);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await api.delete('/', { data: id });
  return data;
};