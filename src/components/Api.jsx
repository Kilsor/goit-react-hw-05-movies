import axios from 'axios';

const apiKey = '81d5804a86027a8c45a46a14c3dcd7e1';
const baseURL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
  },
});
