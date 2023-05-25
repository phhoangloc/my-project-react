import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./reducer/MenuReducer"
import SearchReducer from "./reducer/SearchReducer"
import AccountBoxReducer from "./reducer/AccountBox";
const store = configureStore({
    reducer: {
        menu: MenuReducer.reducer,
        search: SearchReducer.reducer,
        accountBox: AccountBoxReducer.reducer
    }
})

export default store