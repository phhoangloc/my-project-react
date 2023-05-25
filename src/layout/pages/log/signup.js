import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Input } from '../../../component/input'
import { Button } from '../../../component/button'
import color from '../../../asset/color'
import GeneralApi from '../../../api/generalApi'
import { useFormik } from 'formik';
import * as Yup from 'yup';
export const SignUp = () => {

    //data

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(6, 'Must be 6 characters or more')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Must be 6 characters or more')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
    })
    //style
    const background = {
        minHeight: "calc(100vh - 90px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
    const login = {
        width: "90%",
        margin: "auto",
        maxWidth: "575px",
        borderRadius: "5px",
        padding: "50px",
        boxSizing: "border-box",
        boxShadow: "5px 5px 20px grey",
        background: "white",
        h2: {
            textAlign: "center",
            fontSize: "2rem",
            color: color.color1,
        },
        h4: {
            color: color.color2,
            margin: "5px",
            fontWeight: 400,
            cursor: "pointer",
            ":hover": {
                textDecoration: "underline",
                color: color.color1
            }
        },
        h6: {
            margin: "0 10px",
            fontSize: "0.5rem",
            color: "red",
            fontWeight: "normal"
        }
    }

    //funtion

    const signUpf = async () => {

        const body = {
            username: formik.values.username,
            password: formik.values.password,
            email: formik.values.email
        }

        const result = await GeneralApi.signUp(body)
        if (result.success) {
            console.log(result.success)
        } else {
            console.log(result.success)
        }
    }

    return (
        <Grid sx={background}>
            <Grid sx={login}>
                <h2>Sign Up</h2>
                <Input
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <h6>{formik.errors.username}</h6>
                <Input
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <h6>{formik.errors.password}</h6>

                <Input
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <h6>{formik.errors.email}</h6>

                <Button
                    children="Sign Up"
                    onClick={() => signUpf()}
                    disabled={Object.keys(formik.errors).length == 0 && formik.values.username !== '' && formik.values.password !== '' && formik.values.email !== '' ? false : true}
                />
            </Grid>
        </Grid>
    )
}
