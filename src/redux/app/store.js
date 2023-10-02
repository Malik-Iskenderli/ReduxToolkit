import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./features/counter/counterSlice"
import themeSpanSlice from "./features/theme/themeSpanSlice"


export const store = configureStore({
reducer:{
    counter : counterSlice,
    themeSpan : themeSpanSlice,
}
})