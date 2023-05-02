import { Grid } from '@mui/material'
import React, { useState } from 'react'
import color from '../asset/color'
import { useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import store from '../redux/store'
import { setSearchHidden } from '../redux/reducer/search.Reducer'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '../item/search'

export const Header = () => {

    const [background, setBackGround] = useState(color.color6)

    const header = {
        width: "100%",
        background: background,
        container: {
            height: "50px",
            transition: "all 1s",
            overflow: "hidden",
            flexWrap: "nowrap",
            logo: {
                margin: "auto 10px 10px",
                h2: {
                    color: color.color7,
                    margin: "0",
                    cursor: "pointer",
                    fontSize: "1.5rem"
                }
            },
            menu: {
                margin: "auto 0 10px",
                width: "max-content",
                title: {
                    margin: "0 10px",
                    h3: {
                        color: color.color7,
                        margin: 0,
                        cursor: "pointer"
                    }
                }
            },
            account: {
                margin: "auto 5px auto auto",
                height: "100%",
                svg: {
                    width: "30px",
                    height: "30px",
                    margin: "10px auto",
                    color: color.color7,
                    cursor: "pointer"
                }
            }
        },

    }

    const navigate = useNavigate()

    return (
        <Grid sx={[header]}>
            <Search
                onFocus={() => setBackGround(color.color7)}
                onBlur={() => setBackGround(color.color6)}
            />
            <Grid container sx={[header.container]}>
                <Grid item sx={[header.container.logo]} onClick={() => { navigate("/home"); store.dispatch(setSearchHidden(true)) }}><h2>Lockheart</h2></Grid>
                <Grid item container sx={[header.container.menu]}>
                    <Grid item sx={[header.container.menu.title]} onClick={() => { navigate("/about"); store.dispatch(setSearchHidden(true)) }}><h3>About</h3></Grid>
                    <Grid item sx={[header.container.menu.title]} onClick={() => { navigate('/book'); store.dispatch(setSearchHidden(true)) }}><h3>Book</h3></Grid>
                    <Grid item sx={[header.container.menu.title]} onClick={() => { navigate("/contact"); store.dispatch(setSearchHidden(true)) }}><h3>Contact</h3></Grid>
                </Grid>
                <Grid sx={[header.container.account]}>
                    <SearchIcon onClick={() => { navigate("/"); store.dispatch(setSearchHidden(false)) }} />
                    <AccountCircleIcon onClick={() => { navigate("/login"); store.dispatch(setSearchHidden(true)) }} />
                </Grid>
            </Grid>
        </Grid>
    )
}
