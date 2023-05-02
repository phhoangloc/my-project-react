import React, { useState } from 'react'
import { Input } from '../component/input'
import { Button } from '../component/button'
import { Grid } from '@mui/material'
import color from '../asset/color'
import GeneralApi from '../api/generalApi'
import store from '../redux/store'
import { setLoading } from '../redux/reducer/loading.Reducer'
export const LoginBox = (props) => {
    const { onClick } = props

    const LoginBox = {
        minHeight: "100%",
        width: "100%",
        maxWidth: "375px",
        margin: "auto 0 auto auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        background: "whitesmoke",
        padding: "5%",
        h3: {
            margin: "25px 0"
        },
        h5: {
            margin: "10px 0",
            textAlign: "left"
        },
        input: {
            width: "100%",
            height: "30px",
            fontSize: "1.1rem",
            borderRadius: "5px",
            border: "none",
            color: color.color6,
            ":forcus": {
                outline: "none",
                border: "1px solid"
            }
        },
        buttonStyle: {
            margin: "25px 0",
            button: {
                width: "100px",
                height: "40px",
                cursor: "pointer"
            }
        },
        textStyle: {
            margin: "5px auto",
            width: "max-content",
            fontSize: "0.8rem",
            cursor: "pointer",
        }

    }
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const body = { username, password }
    const Login = async () => {
        const result = await GeneralApi.Login({ username, password })
        if (result.success) {
            store.dispatch(setLoading({ display: "flex", message: result.message }))
            setTimeout(() => {
                store.dispatch(setLoading({ display: "none", message: "" }))
            }, 2000)
            console.log(result.message)
        } else {
            store.dispatch(setLoading({ display: "flex", message: result.message }))
            setTimeout(() => {
                store.dispatch(setLoading({ display: "none", message: "" }))
            }, 2000)
            console.log(result.message)

        }
    }
    return (
        <Grid sx={LoginBox}>
            <h3>Log In</h3>
            <Input name="username" onChange={(e) => setUsername(e.target.value)} />
            < Input name="password" onChange={(e) => setPassword(e.target.value)} />
            <Button
                sx={LoginBox.buttonStyle}
                name="Log In"
                onClick={() => Login()}
            />
            <p style={LoginBox.textStyle} onClick={onClick}>create a User</p>
        </Grid>
    )
}
