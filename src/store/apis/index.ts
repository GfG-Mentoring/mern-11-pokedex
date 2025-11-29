import axios from 'axios';

const url = 'http://localhost:8003';

const axiosInstance = axios.create({
  baseURL: url,
});

export default axiosInstance;
