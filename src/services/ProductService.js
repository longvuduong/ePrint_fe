import axios from 'axios';
import { axiosJWT } from './UserService';

export const getAllProduct = async (search, limit, typeProduct) => {
  let res = {};
  if (search || typeProduct) {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all?name=${search}&typeProduct=${typeProduct}&limit=${limit}`);
  } else {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all?limit=${limit}`);
  }
  return res.data;
};

export const getProductType = async (typeProduct, page, limit) => {
  if (typeProduct) {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all?typeProduct=${typeProduct}&limit=${limit}&page=${page}`);
    return res.data;
  }
};
export const getProductSearch = async (search, limit, page) => {
  if (search) {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all?name=${search}&limit=${limit}&page=${page}`);
    return res.data;
  }
};

export const createProduct = async data => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/product/create`, data);
  return res.data;
};

export const getDetailsProduct = async id => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-details/${id}`);
  return res.data;
};

export const updateProduct = async (id, data) => {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/product/update/${id}`, data);
  return res.data;
};

export const deleteProduct = async id => {
  const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/product/delete/${id}`, {});
  return res.data;
};

export const deleteManyProduct = async (data, access_token) => {
  const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/product/delete-many`, data, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const getAllTypeProduct = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-type`);
  return res.data;
};
