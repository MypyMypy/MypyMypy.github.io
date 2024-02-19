import * as toolkitRaw from '@reduxjs/toolkit';
import navLinksReducer from './activeSection/activeSection';

const { configureStore } = toolkitRaw;

const store = configureStore({
  reducer: {
    navLinks: navLinksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
