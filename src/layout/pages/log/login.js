import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Input } from '../../../component/input'
import { Button } from '../../../component/button'
import color from '../../../asset/color'
import GeneralApi from '../../../api/generalApi'
export const Login = () => {

    //data
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const body = { username, password }
    //style
    const background = {
        minHeight: "calc(100vh - 90px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
    const login = {
        width: "90%",
        margin: "auto",
        maxWidth: "575px",
        borderRadius: "5px",
        padding: "50px",
        boxSizing: "border-box",
        boxShadow: "5px 5px 20px grey",
        background: "white",
        h2: {
            textAlign: "center",
            fontSize: "2rem",
            color: color.color1,
        },
        h4: {
            color: color.color2,
            margin: "5px",
            fontWeight: 400,
            cursor: "pointer",
            ":hover": {
                textDecoration: "underline",
                color: color.color1
            }
        }
    }

    //funtion

    const loginf = async () => {
        const result = await GeneralApi.login(body)
        if (result.success) {
            localStorage.nekot = "Bearer" + result.data.token
        } else {
            console.log(result.success)
        }
    }
    return (
        <Grid sx={background}>
            <Grid sx={login}>
                <h2>Log In</h2>
                <Input
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <Input
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <Button
                    children="Log In"
                    onClick={() => loginf()}
                    disabled={username || password ? false : true}
                />
                <h4>Reset Your Password</h4>
            </Grid>
        </Grid>
    )
}
