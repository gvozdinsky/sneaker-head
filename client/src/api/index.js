import axios from 'axios';

const config = {
  baseURL: "/",
};

const api_axios = axios.create(config);

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

//fake api for now
const api = {
  products: {
    getAll: () => {
      return api_axios.get('/products')
    },
    getOne: (id) => {
      return api_axios.get(`/products/${id}`);
    },
  },

  auth: {
    login: (credentials) => {
      return api_axios.post(`/auth/login`, { ...credentials });
    },
    logout: () => {
      return api_axios.get(`/auth/logout`);
    },
    register: (credentials) => {
      return api_axios.post(`/auth/register`, { ...credentials });
    }
  },

  user: {
    getCurrent: () => {
      return api_axios.get(`/users`);
    },
    addToCart: (cartItem) => {
      return api_axios.post('/cart', cartItem);
    }
  }


}

export default api;