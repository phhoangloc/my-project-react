import React from 'react'
import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import store from '../redux/store';
import { setMenu } from '../redux/reducer/MenuReducer';
import { setSearch } from '../redux/reducer/SearchReducer';
import color from '../asset/color';
export const Header = () => {
    const header = {
        height: "50px",
        lineHeight: "50px",
        color: color.color1,
        h1: {
            margin: "0"
        },
        optionBox: {
            margin: "0 0 0 auto ",
            display: "flex",
            svg: {
                width: "30px",
                height: "30px",
                margin: "10px 5px",
                cursor: "pointer",
            },
        }

    }
    const openMenu = () => {
        store.dispatch(setMenu({ width: "100%" }))
    }
    const openSearch = () => {
        store.dispatch(setSearch({ display: "flex" }))
    }
    return (
        <Grid sx={header} container>
            <h1>Lockheart</h1>
            <Grid sx={header.optionBox} >
                <SearchIcon onClick={() => openSearch()} />
                <AccountBoxIcon />
                <MenuIcon onClick={() => openMenu()} />
            </Grid>
        </Grid>
    )
}
