import axios from 'axios';

export const baseUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export const getMainProducts = () => {
  return axios.get(`${baseUrl}?brand=glossier`);
};

export const getProductsByType = (type: string) => {
  return axios.get(`${baseUrl}?product_type=${type}`);
};
