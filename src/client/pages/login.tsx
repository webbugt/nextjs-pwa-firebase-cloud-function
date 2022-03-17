import LoginForm from '@components/user/LoginForm'
import { config } from '@config/config'
import React from 'react'

const LoginPage = ({ query }) => (
    <>
        <h1>Log in to {config.appName}</h1>

        <LoginForm />
    </>
)

export default LoginPage

export const getStaticProps = () => ({
    props: {
        title: 'Log in' // used in _app.js
    },
    revalidate: 31536000 // refresh once a year
})
