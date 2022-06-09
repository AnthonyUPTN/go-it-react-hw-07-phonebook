import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContact.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeContact.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;

// import { createReducer, combineReducers } from '@reduxjs/toolkit';

// import actions from './contacts-actions';

// const contacts = createReducer([], {
//   [actions.fetchContactsSuccess]: (_, { payload }) => payload,
//   [actions.addContactsuccess]: (store, { payload }) => [...store, payload],
//   [actions.removeContactsuccess]: (store, { payload }) =>
//     store.filter(item => item.id !== payload),
// });

// const loading = createReducer(false, {
//   [actions.fetchContactsRequest]: () => true,
//   [actions.fetchContactsSuccess]: () => false,
//   [actions.fetchContactsError]: () => false,
//   [actions.addContactRequest]: () => true,
//   [actions.addContactSuccess]: () => false,
//   [actions.addContactError]: () => false,
//   [actions.removeContactRequest]: () => true,
//   [actions.removeContactSuccess]: () => false,
//   [actions.removeContactError]: () => false,
// });

// const error = createReducer(null, {
//   [actions.fetchContactsRequest]: () => null,
//   [actions.fetchContactsError]: (_, { payload }) => payload,
//   [actions.addContactRequest]: () => null,
//   [actions.addContactError]: (_, { payload }) => payload,
//   [actions.removeContactRequest]: () => null,
//   [actions.removeContactError]: (_, { payload }) => payload,
// });

// const contactsReducer = combineReducers({
//   contacts,
//   loading,
//   error,
// });

// export default contactsReducer;

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, removeContact } from './contacts-actions';

// const contactsReducer = createReducer([], {
//   [addContact]: (store, { payload }) => [...store, payload],
//   [removeContact]: (store, { payload }) =>
//     store.filter(contact => contact.id !== payload),
// });

// export default contactsReducer;
