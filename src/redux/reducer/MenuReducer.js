import { createSlice } from "@reduxjs/toolkit"

const MenuReducer = createSlice({
    name: "Menu",
    initialState: { width: 0 },
    reducers: {
        setMenu: {
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

export const { actions, reducer } = MenuReducer
export const { setMenu } = actions;

export default MenuReducer