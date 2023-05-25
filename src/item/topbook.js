import React from 'react'
import { useState, useEffect } from 'react'
import GeneralApi from '../api/generalApi'
import { Grid } from '@mui/material'
import color from '../asset/color'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom'
const url = process.env.REACT_APP_URL

export const Topbook = () => {

    const [coverBook, setCoverBook] = useState()

    const getCoverBook = async () => {
        const result = await GeneralApi.getCoverItem()
        setCoverBook(result.data)
    }

    useEffect(() => {
        getCoverBook()
    }, [])

    const topbook = {
        transition: "all 0.5s",
        boxSizing: "border-box",
        padding: "25px",
        height: "100vw",
        maxHeight: "400px",
        border: "5px solid white",
        background: color.background,
        textAlign: "center",
        position: "relative",
        iconstyle: {
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "rgba(255,255,255,1)",
            top: 0,
            left: 0,
            padding: "10px",
            opacity: 0,
            transition: "all 0.5s",
            lineHeight: "400px",
            svg: {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                color: color.color1,
                padding: "10px",
                cursor: "pointer",
                ":hover": {
                    color: "white",
                    background: color.color1

                }
            },
            ":hover": {
                opacity: 1,
                background: "rgba(255,255,255,0.8)",
            }
        },
        h3: {
            margin: 0,
        },
        h4: {
            margin: 0
        },
        img: {
            height: "80%",
            transition: "all 0.5s",
        }
    }

    const navigate = useNavigate()
    const Icon = (props) =>
        <Grid sx={topbook.iconstyle}>
            <FavoriteBorderIcon />
            <AddShoppingCartIcon />
            <LaunchIcon onClick={
                () => navigate("book/" + props.i)
            } />
        </Grid>

    const Return = coverBook && coverBook.map((item, index) =>
        <Grid item xs={12} sm={6} md={4} lg={3}
            key={index}
            sx={topbook}
        >
            <img src={url + "img/bookcover/" + item.img} />
            <h3>{item.name}</h3>
            <h4>{item.author}</h4>
            <Icon i={item.slug} />
        </Grid>
    )


    return (
        <Grid container>
            {Return}
        </Grid>
    )
}
