import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:"cart1",
    initialState:{
        items:[]
    },
    reducers:{
        addItem :(state,action)=>{
state.items.push(action.payload)
        },
    removeItem : (state)=>{
        state.items.pop()
    },
    emptyCart:(state)=>{
        state.items.length =[]
    }
    }
});
export const {addItem,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;
