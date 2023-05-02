import { Grid } from '@mui/material'
import React from 'react'

export const Button = (props) => {
    const { sx, name, onClick } = props
    return (
        <Grid sx={sx}>
            <button onClick={onClick}>{name}</button>
        </Grid>
    )
}
