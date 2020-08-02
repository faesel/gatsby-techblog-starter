import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FiCalendar, FiClock } from "react-icons/fi";

import Layout from '../components/layout'
import Head from "../components/head"
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlog ( sort: { fields: datePublished, order: DESC } ) {
                edges {
                    node {
                        title
                        tags
                        hero {
                            file {
                                url
                            }
                            title
                        }
                        slug
                        datePublished(formatString:"MMMM Do, YYYY")
                        bodym {
                            childMarkdownRemark { 
                                timeToRead
                                excerpt(pruneLength: 300)
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head pageTitle="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlog.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p><b><FiCalendar title="Date Published" /></b> {props.data.contentfulBlog.datePublished}&nbsp;&nbsp;<b><FiClock title="Reading Time" /></b> {props.data.contentfulBlog.bodym.childMarkdownRemark.timeToRead} Minutes</p>
                                <img src={`https:${edge.node.hero.file.url}`} alt={edge.node.hero.title}></img>
                                <p>{edge.node.bodym.childMarkdownRemark.excerpt}</p>
                                <ol className={blogStyles.tags}>
                                    {edge.node.tags.map(tag =>
                                        (
                                            <li className={blogStyles.tag}>{tag}</li>
                                        )
                                    )}
                                </ol>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage