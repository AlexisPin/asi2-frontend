import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cardReducer from './slices/cardSlice';
import userReducer from './slices/userSlice';
import shopReducer from './slices/shopSlice';

const rootReducer = combineReducers({
  card: cardReducer,
  user: userReducer,
  shop: shopReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
