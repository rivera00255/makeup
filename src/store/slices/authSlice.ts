import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const authSlice = createSlice({
  name: 'auth',
  initialState: { username: null, token: null } as { username: string | null; token: string | null },
  reducers: {
    setCredentails: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      return state;
    },
    removeCredentails: (state) => {
      state.username = null;
      state.token = null;
      localStorage.removeItem('auth');
      return state;
    },
  },
});

export const setCurrentUser = (state: RootState) => state.auth.username;
export const { setCredentails, removeCredentails } = authSlice.actions;
export default authSlice.reducer;
