import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FiTwitter, FiLinkedin, FiGithub, FiRss  } from "react-icons/fi";
import { TiSocialFlickr } from "react-icons/ti"

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    social {
                        linkedin
                        twitter
                        github
                        flickr
                    }
                    rssFeedUrl
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            
            <div className={footerStyles.social}>
                <a href={data.site.siteMetadata.social.twitter} rel="noopener noreferrer" target="_blank"><FiTwitter /> Twitter</a>
                <a href={data.site.siteMetadata.social.linkedin} rel="noopener noreferrer" target="_blank"><FiLinkedin /> Linked In</a>
                <a href={data.site.siteMetadata.social.github} rel="noopener noreferrer" target="_blank"><FiGithub /> GitHub</a>
                <a href={data.site.siteMetadata.social.flickr} rel="noopener noreferrer" target="_blank"><TiSocialFlickr /> Flickr</a>
                <a href={data.site.siteMetadata.rssFeedUrl}><FiRss></FiRss> RSS</a>
            </div>

            <div className={footerStyles.copyright}>
                <p>© Copyright 2020, {data.site.siteMetadata.author}</p>
            </div>

        </footer>
    )
}

export default Footer