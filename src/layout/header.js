import React from 'react'
import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import store from '../redux/store';
import { setMenu } from '../redux/reducer/MenuReducer';
import { setSearch } from '../redux/reducer/SearchReducer';
import color from '../asset/color';
import { setAccountBox } from '../redux/reducer/AccountBox';
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
            svg3: {
                "@media (min-width:600px)": {
                    display: "none"
                }
            }
        }
    }
    const openMenu = () => {
        store.dispatch(setMenu({ width: "100%" }))
    }
    const openSearch = () => {
        store.dispatch(setSearch({ display: "flex" }))
    }

    const openAccountBox = () => {
        store.dispatch(store.getState().accountBox.opacity === "0" ? setAccountBox({ transform: "translateX(0%)", opacity: "1" }) : setAccountBox({ transform: "translateX(100%)", opacity: "0" }))
    }
    return (
        <Grid sx={header} container>
            <h1>Lockheart</h1>
            <Grid sx={header.optionBox} >
                <AccountBoxIcon onClick={() => openAccountBox()} />
                <SearchIcon onClick={() => openSearch()} />
                <MenuIcon sx={header.optionBox.svg3} onClick={() => openMenu()} />
            </Grid>
        </Grid>
    )
}
