import axios from 'axios';

const fetchClient = () => {
  const defaultOptions = {
      baseURL: 'http://localhost:5000/api/',
      headers: {
          'Content-Type': 'application/json',
      },
  };
  let instance = axios.create(defaultOptions);
  return instance;
};

export default fetchClient();