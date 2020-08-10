import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getItems = (state) => state.contacts.items;

const getItemById = (state, itemId) => {
  const items = getItems(state);
  return items.find((item) => item.id === itemId);
};

const getFilter = (state) => state.contacts.filter;

const getChoosenItems = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getLoading,
  getItems,
  getItemById,
  getFilter,
  getChoosenItems,
};
