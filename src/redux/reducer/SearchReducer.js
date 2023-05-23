import { createSlice } from "@reduxjs/toolkit"

const SearchReducer = createSlice({
    name: "Search",
    initialState: { display: "none" },
    reducers: {
        setSearch: {
            reducer: (state, action) => {
                return (state = action.payload)
            },
            prepare: (msg) => {
                return {
                    payload: msg
                }
            }
        }
    }
})

export const { actions, reducer } = SearchReducer
export const { setSearch } = actions;

export default SearchReducer