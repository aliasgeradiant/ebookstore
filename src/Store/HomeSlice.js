import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    product: []
  },

  reducers: {
    products: (state, action) => {
        state.product = action.payload      
    }
  },
})

// Action creators are generated for each case reducer function
export const { products } = productSlice.actions

export default productSlice.reducer