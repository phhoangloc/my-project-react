import { Grid } from '@mui/material'
import React from 'react'
import color from '../asset/color'

export const Button = (props) => {
    const { children, onClick, disabled } = props
    const button = {
        button: {
            height: "50px",
            width: "100px",
            margin: "10px",
            color: color.color1,
            fontSize: "bold",
            ":disabled": {
                border: "none",
                color: color.color4
            }
        }
    }
    return (
        <Grid sx={button}>
            <button
                children={children}
                onClick={onClick}
                disabled={disabled}
            />
        </Grid>
    )
}
