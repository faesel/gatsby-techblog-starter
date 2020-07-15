# Introduction

This is a tech blog template built with Gatsby, Contentful and Disqus. Its free to use for anyone, and really easy to configure. Check it out here [faesel.com](https://www.faesel.com/blog/gatsby-tech-blog-starter).

## 🏃‍♂️ Running

1. To run for development - `npm run develop`
2. To clean out temp files - `npm run clean`

Url for accessing the website:
`http://localhost:8000`

Url for accessing graphql:
`http://localhost:8000/___graphql`

## 🔧 Configuration (REQUIRED)

This blog is setup to be easy to configure and get up and running. There are only really two sources of configuration required, in Contentful and in code. I have added some other optional steps if you want to customise further.

### Prerequisites

Before you can begin you need the following free accounts setup:

1. Google account for Google Analytics
2. Contentful account
3. Disqus account

### Contentful

[Contentful](https://www.contentful.com/) is a popular API first content management system. Registration is free and it fulfills all the needs of this blog.

After registering on Contentful your able to define a content model for your blog. This basically represents the structure needed for every blog post.

Below are two ways to create the schema needed for this template:

#### Using contentful importer

Simply run the following command:

```
npm run setup SPACE_ID CONTENTFUL_MANAGEMENT_TOKEN 
```

A json template is located in the root of this project > contentful > export.json that contains the full structure needed.

**Note** The space id and management token can be found by navigating to `Settings` > `API Keys` > `Content Management Tokens`.

#### Creating it manually

The structure for this blog is as follows:

Name | Type 
--- | --- 
Hero | Media
Title | Short Text
Tags | Short Text, List
Slug | Short Text
Date Published | Date & Time
BodyM | Long Text (Set to markdown)

Once this is setup you can source your `Space Id` and `Access token` under `Settings` > `API Keys` to give the blog access.

###  In code

All the code changes needed can be found in the `gatsby-config.js` file. The main ones to change are as follows:

```
module.exports = {
    siteMetadata: {
        title: 'FAESEL.COM',
        author: 'Faesel Saeed',
        description: '',
        siteUrl: 'https://www.faesel.com', //Use the fully qualified url
        social: {
            twitter: 'https://twitter.com/@faeselsaeed', //Use the fully qualified url
            linkedin: '',
            github: '',
            flickr: '',
            email: 'someone@gmail.com'
        },
    },
}
```

Along with the config file there are also some environment variables that need setting:

```
CONTENTFUL_SPACE_ID=CAN BE SOURCED FROM CONTENTFUL SETTINGS
CONTENTFUL_ACCESS_TOKEN=CAN BE SOURCED FROM CONTENTFUL SETTINGS
GOOGLE_TRACKING_ID=CAN BE SOURCED FROM GOOGLE ANAYTICS
GATSBY_DISQUS_NAME=CAN BE SOURCED FROM DISCUS
```

## 💫 Deploy

The deployment script in the packages file is intended to be pushed to use GitHub Pages personal repo. Due to this it pushes to the `master` branch (with personal repo's you dont have a choice on this).

1. To deploy changes - `npm run deploy`

Link:

https://username.github.io/

## 🎨 Colors (OPTIONAL)

Color palette was chosen from coolors.co.

https://coolors.co/palettes/trending

All colors can be found in `styles.scss` file


## 👩‍💻 Customising Rendering code (OPTIONAL)

Code styles can be found here:
https://docs.deckdeckgo.com/components/code/

Link to gatsby docs here:
https://www.gatsbyjs.org/packages/gatsby-remark-highlight-code/#theme

## 🖊 Typography & Icons (OPTIONAL)

Typography

https://www.gatsbyjs.org/docs/typography-js/

Icons 

https://react-icons.github.io/react-icons/icons?name=fi