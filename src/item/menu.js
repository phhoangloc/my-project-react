import React, { useState } from 'react'
import { Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import store from '../redux/store';
import { setMenu } from '../redux/reducer/MenuReducer';
import color from '../asset/color';
import { Link } from 'react-router-dom';
export const Menu = () => {

    const [width, setWidth] = useState(store.getState().menu.width)

    const update = () => {
        store.subscribe(() => setWidth(store.getState().menu.width))
    }

    update()

    const menu = {
        position: "fixed",
        top: 0,
        left: 0,
        width: width,
        height: "100vh",
        background: "whitesmoke",
        boxSizing: "border-box",
        textAlign: "center",
        overflow: "hidden",
        transition: "all 0.5s",
        color: color.color1,
        zIndex: 99,
        svg: {
            position: "absolute",
            top: 0,
            right: 0,
            widht: "30px",
            height: "30px",
            cursor: "pointer",
            padding: "10px",
        },
        h1: {
            margin: "30px 0"
        },
        h2: {
            margin: "0",
            padding: "10px",
            ":active": {
                color: "grey"
            }
        },
        a: {
            textDecoration: "none !important",
            color: "unset !important"
        },
        "@media (min-width:600px)": {
            position: "relative",
            display: " flex",
            height: "40px",
            width: "100%",
            background: color.color1,
            color: "white",
            svg: {
                display: "none",
            },
            h1: {
                display: "none",
            },
            h2: {
                lineHeight: "40px",
                height: "40px",
                fontSize: "1rem !important",
                padding: "0 20px !important",
                margin: 0,
                ":active": {
                    background: color.color2
                }
            }
        }

    }

    const closeMenu = () => {
        store.dispatch(setMenu({ width: "0%" }))
    }

    const menu_list = [
        {
            link: "/",
            title: "Home"
        },
        {
            link: "/about",
            title: "About"
        },
    ]
    const menu_link = menu_list && menu_list.map((item, index) => <Link key={index} to={item.link}><h2 onClick={() => closeMenu()}>{item.title}</h2></Link>)
    return (
        <Grid sx={menu}>
            <CloseIcon onClick={() => closeMenu()} />
            <h1>Menu</h1>
            {menu_link}
        </Grid>
    )
}
