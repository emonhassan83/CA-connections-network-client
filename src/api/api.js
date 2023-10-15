/* eslint-disable no-useless-catch */
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchAccountants = async () => {
  try {
    const response = await api.get(`/accountants`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
