import { Grid } from '@mui/material'
import React from 'react'

export const Input = (props) => {
    const { name, onChange, enterClick, value, sx, onFocus, onBlur } = props
    return (
        <Grid sx={sx}>
            <h5>{name}</h5>
            <input
                onChange={onChange}
                onKeyDown={(e) => { if (e.keyCode === 13) { enterClick() } }}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </Grid>
    )
}
