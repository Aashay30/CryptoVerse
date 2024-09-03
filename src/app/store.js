import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },

 // Add the RTK Query middleware to the store
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(cryptoApi.middleware)  // Add middleware for the first API
    .concat(cryptoNewsApi.middleware),  // Add middleware for the second API

});
