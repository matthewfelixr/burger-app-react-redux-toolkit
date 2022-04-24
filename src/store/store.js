import { configureStore } from '@reduxjs/toolkit'
import burgerSlice from './burger'
import counterSlice from './counter'
import productSlice from './product'


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        burger: burgerSlice.reducer,
        product: productSlice.reducer
    }
})

export default store