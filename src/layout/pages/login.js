import React from 'react'
import { Grid } from '@mui/material'
import { LoginBox } from '../../item/login'
import { useState } from 'react'
export const Login = () => {
    const [trslate, setTrslate] = useState(0)
    const PageLogin = {
        width: "100%",
        height: "calc(100vh - 100px)",
        overflow: "hidden",
        flexBox: {
            display: "flex",
            width: "max-content",
            height: "100%",
            transform: `translateX(${trslate})`,
            transition: "all 0.5s",

            mainBox: {
                width: "100vw",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                Box: {
                    link: {
                        cursor: "pointer",
                    }
                }
            }
        }
    }
    return (
        <Grid sx={[PageLogin]}>
            <Grid sx={[PageLogin.flexBox]}>
                <Grid sx={[PageLogin.flexBox.mainBox]}>
                    <LoginBox onClick={() => setTrslate("-50%")} />
                </Grid>
                <Grid sx={[PageLogin.flexBox.mainBox]}>
                    SignUp
                    <p style={PageLogin.flexBox.mainBox.Box.link} onClick={() => setTrslate("0%")}>changePage</p>
                </Grid>
            </Grid>
        </Grid>
    )
}
