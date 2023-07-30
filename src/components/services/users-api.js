import axios from 'axios';

axios.defaults.baseURL = 'https://64c3a93767cfdca3b660125d.mockapi.io';

export const fetchUsers = async page => {
  const response = await axios.get(`/users?limit=3&page=${page}`);
  return response.data;
};
