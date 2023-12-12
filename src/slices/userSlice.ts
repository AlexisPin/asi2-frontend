import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../type/user';

type UserState = {
  current_user: User | null;
  current_user_id: number;
};

const initialState: UserState = {
  current_user: null,
  current_user_id: -1,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    update_current_user: (state, action: PayloadAction<User>) => {
      state.current_user = action.payload;
    },
    update_current_user_id: (state, action: PayloadAction<number>) => {
      state.current_user_id = action.payload;
    },
  },
});

export const { update_current_user, update_current_user_id } = userSlice.actions;

export default userSlice.reducer;
