import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import staffReducer from '../features/staff/staffSlice';

export const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
