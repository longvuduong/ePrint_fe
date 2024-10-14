import axios from 'axios';
import { axiosJWT } from './UserService';

export const getAllBlog = async (search, limit, typeBlog) => {
  let res = {};
  if (search || typeBlog) {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/get-all?name=${search}&typeBlog=${typeBlog}&limit=${limit}`);
  } else {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/get-all?limit=${limit}`);
  }
  return res.data;
};
export const getBlogType = async (typeBlog, page, limit) => {
  if (typeBlog) {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/get-all?typeBlog=${typeBlog}&limit=${limit}&page=${page}`);
    return res.data;
  }
};

export const createBlog = async data => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/blog/create`, data);
  return res.data;
};

export const getDetailsBlog = async id => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/get-details/${id}`);
  return res.data;
};

export const updateBlog = async (id, data) => {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/blog/update/${id}`, data);
  return res.data;
};

export const deleteBlog = async id => {
  const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/blog/delete/${id}`, {});
  return res.data;
};

export const getAllTypeBlog = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/get-all-type`);
  return res.data;
};
