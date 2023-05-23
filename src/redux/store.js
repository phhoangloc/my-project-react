import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./reducer/MenuReducer"
import SearchReducer from "./reducer/SearchReducer"

const store = configureStore({
    reducer: {
        menu: MenuReducer.reducer,
        search: SearchReducer.reducer,
    }
})

export default store