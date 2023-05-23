import React, { useState } from 'react'
import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import store from '../redux/store';
import { setSearch } from '../redux/reducer/SearchReducer';
import color from '../asset/color';
export const Search = () => {

    const [display, setDisplay] = useState(store.getState().search.display)
    const update = () => {
        store.subscribe(() => setDisplay(store.getState().search.display))
    }
    update()
    const search = {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        background: color.color2,
        textAlign: "center",
        display: display,
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        color: color.color4,
        zIndex: 99,
        h1: {
            margin: "10px"
        },
        input: {
            width: "90%",
            maxWidth: "575px",
            height: "50px",
            borderRadius: "25px",
            margin: "0 auto",
            fontSize: "1.5rem",
            boxSizing: "border-box",
            paddingLeft: "25px"
        },
        svg: {
            margin: "5px",
            widht: "30px",
            height: "30px",
            cursor: "pointer",
            padding: "5px",
            background: "whitesmoke",
            color: color.color1,
        },
    }
    const closeSearch = () => {
        store.dispatch(setSearch({ display: "none" }))
    }
    return (
        <Grid sx={search}>
            <h1>Search</h1>
            <input type="text"></input>
            <Grid>
                <SearchIcon />
                <CloseIcon onClick={() => closeSearch()} />
            </Grid>
        </Grid>
    )
}
