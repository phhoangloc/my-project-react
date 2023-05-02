import { createSlice } from "@reduxjs/toolkit"

const SearchReducer = createSlice({
    name: "Search",
    initialState: false,
    reducers: {
        setSearchHidden: {
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
export const { setSearchHidden } = actions;

export default SearchReducer