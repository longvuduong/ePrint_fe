import axios from 'axios';

export const uploadFiletoFireBase = async (idElement, folder) => {
  const fileInput = document.getElementById(idElement);
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);
  formData.append('folder', folder);
  const dataRes = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData);
  return dataRes.data?.downloadURL;
};
