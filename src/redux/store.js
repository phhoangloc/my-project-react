import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./reducer/search.Reducer";
import LoadingReducer from "./reducer/loading.Reducer";
const store = configureStore({
    reducer: {
        search: SearchReducer.reducer,
        loading: LoadingReducer.reducer,
    }
})

export default store