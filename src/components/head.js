import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import favicon from '../../static/favicon.ico'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
            <Helmet>
                <link rel="icon" href={favicon} />
            </Helmet>
        </>
    )
}

export default Head