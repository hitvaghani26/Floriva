import { createSlice } from '@reduxjs/toolkit'  
const intialState = {
    numberOfItem: 0
}
const cartSlice = createSlice({
    name:"cart",
    initialState : intialState,
    reducers:{
        addCart(state){
            state.numberOfItem++
        },
        removeCart(state){
            state.numberOfItem--
        }
    }

})
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;