import { Grid } from '@mui/material'
import React, { useState } from 'react'
import store from '../redux/store'

export const Loading = () => {
    const [dis, setDis] = useState(store.getState().loading.display)
    const [message, setMessage] = useState(store.getState().loading.message)
    const update = () => {
        store.subscribe(() => setDis(store.getState().loading.display))
        store.subscribe(() => setMessage(store.getState().loading.message))
    }
    update()

    const LoadingStyle = {
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "100vw",
        background: "rgba(0,0,0,0.7)  url(./img/loading.jpg) fixed no-repeat center",
        backgroundBlendMode: "color",
        zIndex: 99,
        display: dis,
        flexDirection: "column",
        justifyContent: "center",

        waves: {
            width: "max-content",
            height: "75px",
            margin: "25px auto",
            wave: {
                width: "25px",
                height: "100%",
                background: "white",
                margin: 'auto 5px',
                borderRadius: "12.5px",
                animation: "loading 1s infinite",
                ":nth-of-type(1)": {
                    animationDelay: "0.3s"
                },
                ":nth-of-type(2)": {
                    animationDelay: "0.6s"
                },
                ":nth-of-type(3)": {
                    animationDelay: "0s"
                },
                ":nth-of-type(4)": {
                    animationDelay: "0.6s"
                },
                ":nth-of-type(5)": {
                    animationDelay: "0.3s"
                },
            },
            "@keyframes loading": {
                "0%": { height: "0px" },
                "50%": { height: "75px" },
                "100%": { height: "0px" }
            }
        },

        h2: {
            textAlign: "center",
            color: "white",
        }
    }
    return (
        <Grid sx={LoadingStyle}>
            <Grid container sx={LoadingStyle.waves}>
                <Grid sx={LoadingStyle.waves.wave}></Grid>
                <Grid sx={LoadingStyle.waves.wave}></Grid>
                <Grid sx={LoadingStyle.waves.wave}></Grid>
                <Grid sx={LoadingStyle.waves.wave}></Grid>
                <Grid sx={LoadingStyle.waves.wave}></Grid>
            </Grid >
            <Grid>
                <h2>{message}</h2>
            </Grid>
        </Grid >
    )
}
