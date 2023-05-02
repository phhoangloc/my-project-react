import React from 'react'
import { Grid } from '@mui/material'
import { useState } from 'react'
import { Input } from '../component/input'
import color from '../asset/color'
import store from '../redux/store'
export const Search = (props) => {
    const { onFocus, onBlur } = props
    const [search, setSearch] = useState("")
    const searchStyle = {
        width: "100%",
        height: "calc(100vh - 50px)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        transition: "all 1s",
        h1: {
            margin: "0",
            color: color.color1,
        },
        h2: {
            margin: "0",
            color: color.color2
        },
        inputBox: {
            width: "100%",
            input: {
                height: "40px",
                width: "80%",
                maxWidth: "375px",
                margin: "10px auto",
                borderRadius: "25px",
                padding: "0 25px",
                fontSize: "1.2rem",
                boxSizing: "border-box",
                border: "2px solid",
                color: color.color6,
                transition: "all 0.5s",
                ":focus": {
                    outline: "none",
                    transform: "scale(1.2)"
                }
            }
        },
    }
    const getSearch = () => {
        window.location.href = "https://www.google.com/search?q=" + search
    }

    const link = window.location.pathname

    return (
        <Grid sx={[searchStyle, store.getState().search || link !== "/" ? { height: 0 } : null]}>
            <h1>Lockheart</h1>
            <h2>hello! can I help you today</h2>
            <Input
                sx={searchStyle.inputBox}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                enterClick={() => getSearch()}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </Grid>
    )
}
