import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type AuthType = {
  session: string;
};

const initialState: AuthType = {
  session: 'Testing Session',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<string>) => {
      state.session = action.payload;
    },
  },
});

export const { setSession } = authSlice.actions;

export default authSlice.reducer;
