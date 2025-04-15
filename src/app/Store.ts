import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import stakeReducer from "../features/stakeSlice";
// import counterReducer from '../features/counter/counterSlice';
// import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    stake: stakeReducer
    // counter: counterReducer,
    // posts: postsReducer
  }
})


export type AppStore = typeof store
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>

///////////////////////////////////////////////
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>