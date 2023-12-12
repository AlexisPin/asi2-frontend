import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../type/user';

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    current_user: {} as User,
  },

  reducers: {
    update_current_user: (state, action: PayloadAction<User>) => {
      state.current_user = action.payload;
    },
  },
});

export const { update_current_user } = userSlice.actions;

export default userSlice.reducer;
