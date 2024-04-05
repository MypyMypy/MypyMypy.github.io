import * as toolkitRaw from '@reduxjs/toolkit';
import { navLinksReducer, projectsReducer } from '@/shared/reducers';

const { configureStore } = toolkitRaw;

export const store = configureStore({
  reducer: {
    navLinks: navLinksReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
