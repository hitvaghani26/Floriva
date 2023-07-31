import { createSlice } from '@reduxjs/toolkit'  
const intialState = {
    isLogin: false,
    name:"",
    email:"",
    sessionID: "",
}   
const authSlice = createSlice({
    name:"auth",
    initialState : intialState,
    reducers:{
        loginuser(state, actions){
            state.isLogin = true;
            state.name = actions.payload.name;
            state.email = actions.payload.email;
            state.sessionID = actions.payload.id;
        },
        logOutuser(state){
            state.isLogin = false;
            state.email = "";
            state.sessionID = "";
            state.name = ""
        }
    }

})
export const authAction = authSlice.actions;
export default authSlice.reducer;