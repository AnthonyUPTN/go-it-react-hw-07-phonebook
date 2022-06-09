import axios from 'axios';

const instsance = axios.create({
  baseURL: 'https://62a09ae7202ceef70871ec5c.mockapi.io/api/v1/contacts',
});

export const getContacts = async () => {
  const { data } = await instsance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instsance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instsance.delete(`/${id}`);
  return data;
};
