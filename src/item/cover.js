import React, { useEffect, useState } from 'react'
import GeneralApi from '../api/generalApi'
import { Grid } from '@mui/material'
import color from '../asset/color'
export const Cover = () => {

    const [coverBook, setCoverBook] = useState()

    const getCoverBook = async () => {
        const result = await GeneralApi.getCoverItem()
        setCoverBook(result.data)
    }

    useEffect(() => {
        getCoverBook()
    }, [])


    const cover = {
        BoxCover: {
            background: color.background,
            height: "50vw",
            maxHeight: "600px",
            width: "100%",
            maxWidth: "1200px",
            margin: "auto",
            position: "relative",
            overflow: "hidden",
            background_cover: {
                position: "absolute",
                width: "100%",
                zIndex: 3
            },
            transiton: "all 0.5s",
            book: {
                position: "absolute",
                width: "25vw",
                maxWidth: "300px",

                top: "5vw",
                left: "10vw",
                zIndex: 2,
                boxSizing: "border-box",

                img: {
                    width: "calc(100% - 10px)",
                    boxShadow: "3px 3px 5px grey",

                    borderBottom: "5px solid grey",
                    borderRight: "5px solid grey",
                    borderRadius: "5px",
                }
            },
            title: {
                position: "absolute",
                width: "50vw",
                maxWidth: "600px",
                color: color.color2,
                background: "rgba(255,255,255,0.9)",
                textAlign: "center",
                top: "10vw",
                right: "7vw",
                zIndex: 4,
                padding: "10px 10px",
                h1: {
                    fontSize: "calc( 15px + 0.7vw)",
                    margin: "10px 0"
                },
                h3: {
                    fontSize: "calc(12px + 0.5vw)",
                    margin: "10px 0"
                }
            }
        },
        BoxCircle: {
            display: "flex",
            width: "max-content",
            margin: "20px auto",
            circle: {
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                margin: "0 5px",
                border: "1px solid" + color.color1,
                cursor: "pointer",
            },
            circlePlus: {
                background: color.color1
            }
        }
    }
    const [i, seti] = useState(0);
    const changeCover = () => {
        if (coverBook && i < coverBook.length - 1) { seti(i + 1) } else { seti(0) }
    }
    setTimeout(() => changeCover(), 5000)
    const book =
        <Grid sx={cover.BoxCover.book}>
            <img src={coverBook && "http://localhost:4000/img/bookcover/" + coverBook[i].img} />
        </Grid>
    const title =
        <Grid sx={cover.BoxCover.title}>
            <h1>{coverBook && coverBook[i].name}</h1>
            <h3>{coverBook && coverBook[i].author}</h3>
        </Grid>

    const circle = coverBook && coverBook.map((item, index) =>
        <Grid key={index} sx={[cover.BoxCircle.circle, i === index && cover.BoxCircle.circlePlus]}></Grid>
    )
    return (
        <Grid sx={cover}>
            <Grid sx={cover.BoxCover}>
                <img style={cover.BoxCover.background_cover} src={"http://localhost:3000/img/cover.png"} />
                {book}
                {title}
            </Grid>
            <Grid sx={cover.BoxCircle}>
                {circle}
            </Grid>
        </Grid>
    )
}
