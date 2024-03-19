import { configureStore } from "@reduxjs/toolkit";
import todoReduser from './TodoSlice'

export default configureStore({
    reducer:{
        todos:todoReduser,
    }
})
