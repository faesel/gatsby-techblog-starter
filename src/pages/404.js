import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Page not found</h1>
            <p>Ops we made a mistake! click the link below to navigate back to the home page.</p>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound