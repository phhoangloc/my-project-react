import { Grid } from '@mui/material'
import React from 'react'
import color from '../asset/color'
import { useState } from 'react'
export const Input = (props) => {

    const { name, type, onChange, value } = props

    const [focus, setfocus] = useState(false)

    const input = {
        width: "100%",
        margin: "5px 0",
        boxSizing: "border-box",
        padding: "0 1%",
        h5: {
            width: "max-content",
            margin: " 5px 0",
            fontWeight: 400,
            fontSize: "1rem",
            padding: "0 5px",
            transform: "translateY(40px)",
            letterSpacing: "1px",
            transition: "all 0.5s"
        },
        focus: {
            transform: "translateY(0px)",
        },
        input: {
            margin: " 5px 0",
            width: "100%",
            height: "40px",
            padding: 0,
            border: "1px solid",
            boxSizing: "border-box",
            fontSize: "1.2rem",
            borderRadius: "5px",
            padding: "0 5px",
            color: color.color4,
            transition: "all 0.25s",

            ":focus": {
                outline: "none",
                background: "white",
                color: color.color1,
            }
        }
    }

    const onblur = () => {
        setfocus(false)
    }
    const onfocus = () => {
        setfocus(true)
    }
    return (
        <Grid sx={input}>
            <h5 style={focus ? input.focus : value ? input.focus : {}}>{name}</h5>
            <input
                type={type}
                onChange={onChange}
                onFocus={() => onfocus()}
                onBlur={() => onblur()}
                value={value}
                name={name}
            />
        </Grid>
    )
}
