import { createSlice } from "@reduxjs/toolkit";





const cart = createSlice({
    name:"cart",
    initialState:{
        cartitems:[],

    },
    reducers:{
        addToCart: (state, action) => {
            const newItem = action.payload;
            state.cartitems.push(newItem);
          },
          },
})
export const { addToCart } = cart.actions;
export default cart.reducer;
