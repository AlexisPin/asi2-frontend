import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../type/card';

export const cardSlice = createSlice({
  name: 'Robot',
  initialState: {
    current_card: {} as Card,
  },
  reducers: {
    update_selected_card: (state, action: PayloadAction<Card>) => {
      state.current_card = action.payload;
    },
  },
});

export const { update_selected_card } = cardSlice.actions;

export default cardSlice.reducer;
