import React from 'react'
import { Grid } from '@mui/material'
import { Cover } from '../../item/cover'
import { Topbook } from '../../item/topbook'
export const Home = () => {
    return (
        <Grid>
            <Cover />
            <Grid sx={{ maxWidth: "1200px", margin: "auto" }}>
                <h1>Book</h1>
                <Topbook />
            </Grid>
        </Grid>
    )
}
