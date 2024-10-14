import axios from 'axios';
import { axiosJWT } from './UserService';

export const getAllCollection = async (search, limit, typeCollection) => {
  let res = {};
  if (search || typeCollection) {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/collection/get-all?name=${search}&typecollection=${typeCollection}&limit=${limit}`);
  } else {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/collection/get-all?limit=${limit}`);
  }
  return res.data;
};

export const createCollection = async data => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/collection/create`, data);
  return res.data;
};

export const getDetailsCollection = async id => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/collection/get-details/${id}`);
  return res.data;
};

export const updateCollection = async (id, data) => {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/collection/update/${id}`, data);
  return res.data;
};

export const deleteCollection = async id => {
  const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/collection/delete/${id}`, {});
  return res.data;
};

export const getAllTypeCollection = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/collection/get-all-type`);
  return res.data;
};
export const getCollectionType = async (typeCollection, page, limit) => {
  if (typeCollection) {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/collection/get-all?typeCollection=${typeCollection}&limit=${limit}&page=${page}`);
    return res.data;
  }
};
