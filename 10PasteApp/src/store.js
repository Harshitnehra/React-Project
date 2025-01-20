import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './Redex/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
})