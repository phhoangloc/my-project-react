import React from 'react'
import { Grid } from '@mui/material'
import { Home } from './pages/home'
import { Routes, Route } from "react-router-dom"
import { About } from './pages/about'
import { BookDetail } from './pages/detail/bookDetail'
export const Body = () => {
    const PageList = [
        {
            path: "/book/:slug",
            component: <BookDetail />
        },
        {
            path: "/about",
            component: <About />
        },
        {
            path: "/",
            component: <Home />
        },

    ]

    const Page = PageList && PageList.map((item, index) => <Route key={index} path={item.path} element={item.component} />)
    return (
        <Routes>
            {Page}
        </Routes>
    )
}
