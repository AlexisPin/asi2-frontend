import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
  name: 'ShopState',
  initialState: {
    shop_state: 'sell',
    transaction_state: 'success',
  },
  reducers: {
    update_shop_state: (state, action: PayloadAction<'sell' | 'buy'>) => {
      state.shop_state = action.payload;
    },
    update_transaction_state: (state, action: PayloadAction<'success' | 'error' | ''>) => {
      state.transaction_state = action.payload;
    },
  },
});

export const { update_shop_state, update_transaction_state } = shopSlice.actions;

export default shopSlice.reducer;
