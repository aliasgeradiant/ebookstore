import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Store/HomeSlice';

export const store = configureStore({
  reducer: {
    products: productReducer
  },
})