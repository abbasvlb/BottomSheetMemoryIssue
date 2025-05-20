import { configureStore } from '@reduxjs/toolkit';

import reducer from './base';

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([]),
});
