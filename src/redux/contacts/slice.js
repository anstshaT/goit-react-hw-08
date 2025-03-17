import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContactName,
  editContactNumber,
} from "./operations";
import { logOutThunk } from "../auth/operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleReject = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleReject)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleReject)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, handleReject)
      .addCase(logOutThunk.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      })
      .addCase(editContactName.fulfilled, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        item.name = action.payload.name;
      })
      .addCase(editContactNumber.fulfilled, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        item.number = action.payload.number;
      });
  },
});

export const contactsReducer = slice.reducer;
