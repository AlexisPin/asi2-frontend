import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../type/card';

export const cardSlice = createSlice({
  name: 'Card',
  initialState: {
    current_card: {} as CardType,
  },
  reducers: {
    update_selected_card: (state, action: PayloadAction<CardType>) => {
      state.current_card = action.payload;
    },
  },
});

export const { update_selected_card } = cardSlice.actions;

export default cardSlice.reducer;
