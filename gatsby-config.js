module.exports = {
    siteMetadata: {
        title: 'FAESEL.COM',
        author: 'Faesel Saeed',
        description: 'Personal blog of Faesel Saeed',
        siteUrl: 'https://www.faesel.com',
        social: {
            linkedin: 'https://www.linkedin.com/in/faesel-saeed-a97b1614',
            twitter: 'https://twitter.com/@faeselsaeed',
            github: 'https://github.com/faesel',
            flickr: 'https://www.flickr.com/photos/faesel/',
            email: 'faesel@outlook.com'
        },
        rssFeedUrl: '/rss.xml'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: process.env.GOOGLE_TRACKING_ID,
                // Puts tracking script in the head instead of the bod
                head: true,
                // enable ip anonymization
                anonymize: true,
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    },
                    {
                        resolve: `gatsby-remark-highlight-code`,
                        options: {
                            terminal: 'carbon',
                            lineNumbers: true
                        }
                    },
                ]
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/fonts/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                            site_url: siteUrl
                        }
                    }
                }`,
                feeds: [
                    {
                        serialize: ({ query: { site, allContentfulBlog } }) => {
                            return allContentfulBlog.edges.map(edge => {
                                return Object.assign({}, edge.node, {
                                    title: edge.node.title,
                                    description: edge.node.bodym.childMarkdownRemark.excerpt,
                                    date: edge.node.datePublished,
                                    url: `${site.siteMetadata.siteUrl}/blog/${edge.node.slug}`,
                                    guid: edge.node.bodym.childMarkdownRemark.id,
                                    custom_elements: [{ "content:encoded": edge.node.bodym.childMarkdownRemark.html }],
                                })
                            })
                        },
                        query: `
                        {
                            allContentfulBlog (
                                sort: {
                                    fields: datePublished
                                    order: DESC
                                }
                            ) {
                            edges {
                                node {
                                    title
                                    slug
                                    datePublished(formatString: "ddd, DD MMM YYYY HH:mm:ss ZZ")
                                    bodym {
                                        id,
                                        childMarkdownRemark {
                                            excerpt(pruneLength: 200)
                                            html
                                        }
                                    }
                                }
                            }
                            }
                        }`,
                        output: '/rss.xml',
                        title: 'Faesel.Com RSS Feed',
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: '/sitemap.xml',
                exclude: [],
                query: `
                {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }
            
                    allSitePage {
                        nodes {
                            path
                        }
                    }
                }`,
                resolveSiteUrl: ({ site, allSitePage }) => {
                    return site.siteMetadata.siteUrl
                },
                serialize: ({ site, allSitePage }) =>
                    allSitePage.nodes.map(node => {
                        return {
                            url: `${site.siteMetadata.siteUrl}${node.path}`,
                            changefreq: `daily`,
                            priority: 0.7,
                        }
                    })
            }
        }
    ]
}