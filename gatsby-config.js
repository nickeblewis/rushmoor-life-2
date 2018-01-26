module.exports = {
  siteMetadata: {
    title: 'HeadForCode',
    siteUrl: 'https://headforcode.com',
  },
  plugins: [
    'gatsby-plugin-react-next',
    {
    resolve: `gatsby-source-stripe`,
    options: {
      objects: ['customers', 'products'],
      secretKey: 'sk_test_mR7hGVMgsSuWQbCh5h6deXny',
    }
  },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-86079311-1',
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/rushmoorlife`,
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTY3OTM0NzIsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqY3N6ZjV4YjE3YXAwMTc5c2U4ZThtcXgiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqY3N6bzYyYjB1dDQwMTIwcmhzZmNqeGUifQ.AqxkG8qdMMZWSva5YGUTaQ_Y0tiPzHDmoIJIJINV52U`,
        query: `{
            allBlogPosts {
              id
              postTitle
              postSlug
              postContent
              postDate
              postImage {
                id
                fileName
                handle
              }
              authors {
                authorName
              }
            }
        }`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 720,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    'gatsby-plugin-offline',
  ],
};
