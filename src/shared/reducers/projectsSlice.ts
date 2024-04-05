import { createSlice } from '@reduxjs/toolkit';
import { projects, ProjectsT } from '@/shared/model/data';

interface stateI {
  projects: ProjectsT;
  activeSortTags: string[];
  isTop: boolean;
}

const initialState: stateI = {
  projects: [...projects].sort((a, b) => {
    const aDate = new Date(Number(a.date.year), Number(a.date.month) - 1);
    const bDate = new Date(Number(b.date.year), Number(b.date.month) - 1);
    return bDate.getTime() - aDate.getTime();
  }),
  activeSortTags: [],
  isTop: true,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    filterByTags: (state, action) => {
      const tag = action.payload;
      const isTagInFilters = state.activeSortTags.includes(tag);
      if (isTagInFilters) {
        state.activeSortTags = state.activeSortTags.filter((a) => a !== tag);
      } else {
        state.activeSortTags.push(tag);
      }
      if (state.activeSortTags.length > 0) {
        state.projects = initialState.projects.filter((project) =>
          state.activeSortTags.every((tag) => project.tags.includes(tag))
        );
      } else {
        state.projects = initialState.projects;
      }
    },
    sortByDate: (state) => {
      state.isTop = !state.isTop;
      state.projects.sort((a, b) => {
        const aDate = new Date(Number(a.date.year), Number(a.date.month) - 1);
        const bDate = new Date(Number(b.date.year), Number(b.date.month) - 1);
        if (state.isTop) return bDate.getTime() - aDate.getTime();
        else return aDate.getTime() - bDate.getTime();
      });
    },
  },
});

export const { filterByTags, sortByDate } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
