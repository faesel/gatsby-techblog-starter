import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import favicon from '../../static/favicon.ico'

const Head = ({ pageTitle, title, url, description, imageUrl, imageAlt, type, datePublished }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl,
                    title,
                    description,
                    author,
                    social {
                        twitterUsername
                    }
                }
            }
        }
    `)

    const ldJsonBreadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [{
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': `${data.site.siteMetadata.siteUrl}/home`
        },{
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': `${data.site.siteMetadata.siteUrl}/blog`
        },{
            '@type': 'ListItem',
            'position': 3,
            'name': 'Projects',
            'item': `${data.site.siteMetadata.siteUrl}/projects`
        },{
            '@type': 'ListItem',
            'position': 4,
            'name': 'Contact',
            'item': `${data.site.siteMetadata.siteUrl}/contact`
        }]
      };

    const jsonldArticle = {
        '@context': 'http://schema.org',
        '@type': `${type}`,
        'description': `${description}`,
        'image': {
            '@type': 'ImageObject',
            'url': `${imageUrl}`
        },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `${data.site.siteMetadata.siteUrl}`
         },
        'inLanguage': 'en',
        'name': `${title}`,
        'headline': `${title}`,
        'url': `${url}`,
        'datePublished': `${datePublished}`,
        'dateModified': `${datePublished}`,
        'author': {
            '@type': 'Person',
            'name': `${data.site.siteMetadata.author}`
        },
        'publisher' : {
            '@type': 'Organization',
            'name': `${data.site.siteMetadata.author}`,
            'logo': {
                '@type': 'ImageObject',
                'url': `https://images.ctfassets.net/wjg1udsw901v/4RI5COhSqeYFCbvzYFeFZW/af52277ab41da56c1be5f72f316befe9/logo.png`
            }
        }
    };

    return (
        <>
            <Helmet title={`${pageTitle} | ${data.site.siteMetadata.title}`} />
            <Helmet>
                <link rel="icon" href={favicon} />
                
                <meta name="description" content={description}></meta>
                <meta name="referrer" content="no-referrer-when-downgrade"></meta>

                <script type="application/ld+json">
                    {JSON.stringify(ldJsonBreadcrumb)}
                </script>
                
                {type === 'article' && (
                   <script type="application/ld+json">
                        {JSON.stringify(jsonldArticle)}
                    </script>
                )}

                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:site" contact={data.site.siteMetadata.social.twitterUsername}></meta>
                <meta name="twitter:creator" content={data.site.siteMetadata.social.twitterUsername}></meta>
                <meta name="twitter:title" content={title}></meta>
                <meta name="twitter:description" content={description}></meta>
                <meta name="twitter:image" content={imageUrl}></meta>

                <meta property="og:locale" content="en_GB" />
                <meta property="og:site_name" content={data.site.siteMetadata.title} />
                <meta property="og:title" content={title}></meta>
                <meta property="og:url" content={url}></meta>
                <meta property="og:description" content={description}></meta>
                <meta property="og:image" content={imageUrl}></meta>
                <meta property="og:image:alt" content={imageAlt}></meta>
                <meta property="og:type" content={type} />
            </Helmet>
        </>
    )
}

export default Head