import React from 'react'
import { Home } from './pages/home'
import { Routes, Route } from "react-router-dom"
import { About } from './pages/about'
import { BookDetail } from './pages/detail/bookDetail'
import { Login } from './pages/log/login'
import { SignUp } from './pages/log/signup'

export const Body = () => {
    const PageList = [
        {
            path: "/user/login",
            component: <Login />
        },
        {
            path: "/user/signup",
            component: <SignUp />
        },
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
