import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', data => {
  const newContact = {
    ...data,
    id: nanoid(),
  };
  return { payload: newContact };
});

export const removeContact = createAction('contacts/remove');

const actionCreators = {
  addContact,
  removeContact,
};

export default actionCreators;

// import { ADD_CONTACT, REMOVE_CONTACT } from './types';

// const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: { ...payload, id: nanoid() },
//   };s
// };

// const removeContact = payload => {
//   return {
//     type: REMOVE_CONTACT,
//     payload,
//   };
// };
