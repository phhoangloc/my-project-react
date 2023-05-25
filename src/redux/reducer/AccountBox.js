import { createSlice } from "@reduxjs/toolkit"

const AccountBoxReducer = createSlice({
    name: "AccountBox",
    initialState: { transform: "translateX(100%)", opacity: "0" },
    reducers: {
        setAccountBox: {
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

export const { actions, reducer } = AccountBoxReducer
export const { setAccountBox } = actions;

export default AccountBoxReducer