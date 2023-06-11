import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getItem =createAsyncThunk('about/getItme',async()=>{
  try{
     const response = await fetch('https://fakestoreapi.com/products')
     const data = await response.json()
     return data
  }catch(error){
  
  }
})




const actionSlice = createSlice({
    name: "about",
    initialState: {
      items: [],
      
      status: "",
      error: "",
    },
    extraReducers: (builder) => {
        builder.addCase(getItem.pending, (state) => {
          state.status = "PENDING";
        });
        builder.addCase(getItem.fulfilled, (state, action) => {
          state.status = "SUCCESS";
          state.items = action.payload;
        
        
        });
        builder.addCase(getItem.rejected, (state, { payload }) => {
          state.status = "ERRORS";
          state.error = payload;
        });
      },
})
export const { reducer: actionReducer } = actionSlice;