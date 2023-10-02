import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeSpan : false
}

export const themeSpanSlice = createSlice({
    name : "themeSpan",
    initialState,
    reducers:{
        checkedDecrement : (state)=>{
            state.themeSpan = true
        },
        checkedIncrement : (state)=>{
            state.themeSpan = false
        }
    }
})

export const {checkedDecrement,checkedIncrement} = themeSpanSlice.actions
export default themeSpanSlice.reducer