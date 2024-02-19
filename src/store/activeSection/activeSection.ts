import { createSlice } from '@reduxjs/toolkit';
import { links } from '../../data';

type NavLinksState = Array<{ name: string; hash: string; active: boolean }>;
const initialState: NavLinksState = links;

const navLinksSlice = createSlice({
  name: 'navLinks',
  initialState,
  reducers: {
    switchActiveSection: (state, action) => {
      const { inView, sectionId } = action.payload;
      const linkObject = state.find((item) => item.hash.slice(1) === sectionId);

      if (linkObject && inView) {
        for (const linkObject of state) linkObject.active = false;
        linkObject.active = inView;
      }
    },
  },
});

export const { switchActiveSection } = navLinksSlice.actions;
export default navLinksSlice.reducer;
