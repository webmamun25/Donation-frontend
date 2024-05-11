import { configureStore } from '@reduxjs/toolkit'
import donationReducer from './features/DonateSlice'
import { baseApi } from './api/api'

import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    donations:donationReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})
setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch