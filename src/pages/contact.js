import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FiTwitter, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    social {
                        linkedin
                        twitter
                        github
                    }
                }
            }
        }
    `)

    const { social } = data.site.siteMetadata;
    
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact Me</h1>

            <p>I may take up to a day to get back to you if you do decide to contact me, so please be patient.</p>

            <ol className={contactStyles.contactbox}>
                <li className={contactStyles.contactoption}>
                    <a href={`mailto:${social.email}`} target="_blank" rel="noreferrer">
                        <div className={contactStyles.content}>
                            <div className={contactStyles.contenticon}>
                                <FiMail></FiMail>
                            </div>
                            <p>
                                Im always looking forward to new opportunities, ping me if you got any. 
                            </p>
                        </div>
                    </a>
                </li>
                <li className={contactStyles.contactoption}>
                    <a href={social.linkedin} rel="noopener noreferrer" target="_blank">
                        <div className={contactStyles.content}>
                            <div className={contactStyles.contenticon}>
                                <FiLinkedin></FiLinkedin>
                            </div>
                            <p>
                                So you wanna hire me hey, for anything career related Linked In is the best place, please do review my current experience including the technologies im familiar with before contacting me.
                            </p>
                        </div>
                    </a>
                </li>
                <li className={contactStyles.contactoption}>
                    <a href={social.github} rel="noopener noreferrer" target="_blank">
                        <div className={contactStyles.content}>
                            <div className={contactStyles.contenticon}>
                                <FiGithub></FiGithub>
                            </div>
                            <p>
                                Want to help contribute to my blog? or one of the projects in my repos, GitHub is the place to be!
                            </p>
                        </div>
                    </a>
                </li>
                <li className={contactStyles.contactoption}>
                    <a href={social.twitter} rel="noopener noreferrer" target="_blank">
                        <div className={contactStyles.content}>
                            <div className={contactStyles.contenticon}>
                                <FiTwitter></FiTwitter>
                            </div>
                            <p>
                                Twitter is the best place to contact be for anything else, whether its something random or you just want to chat im happy to DM here.
                            </p>
                        </div>
                    </a>
                </li>
            </ol>
        </Layout>
    )
}

export default ContactPage