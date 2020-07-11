import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head siteTitle="About"/>
            <h1>About</h1>
            <p>I am a software developer with a strong passion for technology and all things new. I specialise in delivering web-based & enterprise solutions and love new challenges. I take great pride in keeping up to date with current development practices and instilling them within my working environment.</p>
            <p><Link to="/contact">Want to work with me?</Link></p>
        </Layout>
    )
}

export default AboutPage