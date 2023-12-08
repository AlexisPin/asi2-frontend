import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cardReducer from './slices/cardSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  card: cardReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
