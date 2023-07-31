import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cart'
import AuthReducer from './auth'

const store = configureStore({
    reducer: {cart : CartReducer, auth: AuthReducer}
})
export default store;