// sidebarSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  collapsed: boolean;
}

const initialState: SidebarState = {
  collapsed: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
    setCollapsedToTrue: (state) => {
      state.collapsed = true;
    },
    setCollapsedToFalse: (state) => {
      state.collapsed = false;
    },
  },
});

export const { setCollapsed, setCollapsedToTrue, setCollapsedToFalse } = sidebarSlice.actions;

export default sidebarSlice.reducer;
