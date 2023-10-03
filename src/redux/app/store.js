import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./features/counter/counterSlice"
import themeSpanSlice from "./features/theme/themeSpanSlice"
import countryReducer from "./features/countApi/countrySlice"


export const store = configureStore({
reducer:{
    counter : counterSlice,
    themeSpan : themeSpanSlice,
    country : countryReducer,
}
})