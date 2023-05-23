import React from 'react'
import { Grid } from '@mui/material'
import { Cover } from '../../item/cover'
import { Topbook } from '../../item/topbook'
export const Home = () => {
    return (
        <Grid>
            <Cover />
            <Topbook />
        </Grid>
    )
}
