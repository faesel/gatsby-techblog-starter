import React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import Head from "../components/head"

import './blog.scss'

export const query = graphql`
    query($slug: String!) {
        site {
          siteMetadata {
            siteUrl
          }
        }
        contentfulBlog (
            slug: {
                eq: $slug
            }
        ) {
            title,
            slug
            tags
    				hero {
              file {
                url
              }
              title
            }
            datePublished(formatString: "MMMM Do, YYYY")
            bodym {
              childMarkdownRemark {
                excerpt(pruneLength: 50)
                timeToRead
                html
              }
            }
        }
    }
`

const Blog = props => {
  deckDeckGoHighlightElement();

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: props.data.contentfulBlog.title },
  }

  return (
    <Layout>
      <Head 
        siteTitle={props.data.contentfulBlog.title}
        title={props.data.contentfulBlog.title}
        description={props.data.contentfulBlog.bodym.childMarkdownRemark.excerpt}
        url={`${props.data.site.siteMetadata.siteUrl}/blog/${props.data.contentfulBlog.slug}`}
        imageUrl={props.data.contentfulBlog.hero.file.url}
        imageAlt={props.data.contentfulBlog.hero.title} 
        type='article'
        datePublished={props.data.contentfulBlog.datePublished} />

      <h1>{props.data.contentfulBlog.title}</h1>
      <p><b>Date Published:</b> {props.data.contentfulBlog.datePublished} <b>Reading Time:</b> {props.data.contentfulBlog.bodym.childMarkdownRemark.timeToRead} minutes</p>
      <ol className="tags">
        {props.data.contentfulBlog.tags.map(tag =>
            (
              <li className="tag">{tag}</li>
            )
          )}
      </ol>
      <img src={props.data.contentfulBlog.hero.file.url} alt={props.data.contentfulBlog.hero.title}></img>
      { props.data.contentfulBlog.bodym && (
        <div dangerouslySetInnerHTML={{ 
          __html: props.data.contentfulBlog.bodym.childMarkdownRemark.html }}>
        </div>
      )}

      <DiscussionEmbed {...disqusConfig} />

    </Layout>
  )
}

export default Blog
