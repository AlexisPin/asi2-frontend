import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
  name: 'ShopState',
  initialState: {
    shop_state: 'sell',
  },
  reducers: {
    update_shop_state: (state, action: PayloadAction<'sell' | 'buy'>) => {
      state.shop_state = action.payload;
    },
  },
});

export const { update_shop_state } = shopSlice.actions;

export default shopSlice.reducer;
