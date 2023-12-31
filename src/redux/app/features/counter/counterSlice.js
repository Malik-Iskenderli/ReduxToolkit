import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0
}
export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        decrement : (state) => {
            state.counter -= 1
        },
        increment : (state) => {
            state.counter += 1
        },
    }
})

export const {decrement,increment} = counterSlice.actions

export default counterSlice.reducer