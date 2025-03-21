import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

/* Memoization of selectors */

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactFilter) => {
    return contacts.filter((contact) => {
      const nameContains = contact.name
        .toLowerCase()
        .includes(contactFilter.toLowerCase());
      const numberContains = contact.number
        .toLowerCase()
        .includes(contactFilter.toLowerCase());

      return nameContains || numberContains;
    });
  }
);
