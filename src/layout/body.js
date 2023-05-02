import React from 'react'
import { Home } from './pages/home'
import { Contact } from './pages/contact'
import { Route, Routes } from 'react-router-dom'
import { About } from './pages/about'
import { Login } from './pages/login'
export const Body = () => {

    const data = [
        {
            path: "/login",
            component: <Login />
        },
        {
            path: "/contact",
            component: <Contact />
        },
        {
            path: "/about",
            component: <About />
        },
        {
            path: "/home",
            component: <Home />
        }
    ]

    const RoutesReturn = data.map((item, index) =>
        <Route exact key={index} path={item.path} element={item.component} />
    )

    return (
        <Routes>
            {RoutesReturn}
        </Routes>
    )
}
