import { Grid } from '@mui/material'
import React from 'react'
import color from '../asset/color'
import store from '../redux/store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AccountBox = () => {
    const [accountBoxPlus, setAccountBoxPlus] = useState(store.getState().accountBox)

    const update = () => {
        store.subscribe(() => setAccountBoxPlus(store.getState().accountBox))
    }

    update()

    const Box = {
        position: "absolute",
        top: "50px",
        width: "max-content",
        height: "40px",
        zIndex: 98,
        right: 0,
        overflow: "hidden",
        "@media (min-width:600px)": {
            zIndex: 99
        }
    }
    const accountBox = {
        display: "flex",
        background: color.color1,
        color: "white",
        width: "max-content",
        transition: "all 0.5s",
        cursor: "pointer",
        h2: {
            lineHeight: "40px",
            height: "40px",
            fontSize: "1rem !important",
            padding: "0 20px !important",
            margin: 0,
            ":active": {
                background: color.color2
            }
        }
    }
    const navigate = useNavigate()
    return (
        <Grid sx={Box}>
            <Grid sx={[accountBox, accountBoxPlus]}>
                <h2 onClick={() => navigate("user/login")}>Log In</h2>
                <h2 onClick={() => navigate("user/signup")}>Sign Up</h2>
            </Grid>

            <Grid sx={[accountBox, accountBoxPlus, { display: "none" }]}>
                <h2>Log Out</h2>
            </Grid>
        </Grid>
    )
}
