import { configureStore } from '@reduxjs/toolkit'
import verifyReducer from "./slice/verifySlice"

export const store = configureStore({
    reducer: {
        verify: verifyReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch