import { createSlice } from "@reduxjs/toolkit"

const LoadingReducer = createSlice({
    name: "Loading",
    initialState: { display: "none", message: "asdasd" },
    reducers: {
        setLoading: {
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

export const { actions, reducer } = LoadingReducer
export const { setLoading } = actions;

export default LoadingReducer