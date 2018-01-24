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
        endpoint: `https://api.graphcms.com/simple/v1/headforcode`,
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTExNjkyOTMsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqYTd5eWk0dzF3c2swMTQ0b3V4NzI0azIiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqYTd6NmhxbDI3Y2cwMTcyajdocHB1cDIifQ.KRQblWZ-LN7o1PslV5nv-YymVHvIVcQcgBKOgjIipDA`,
        query: `{
            allBlogPosts {
              id
              postTitle
              postSlug
              postContent
              postDateAndTime
              postImage {
                id
              }
              authors {
                authorName
              }
            }
            allProducts {
              id
              productTitle
              productDescription
              productImage {
                id
                handle
                width
                height
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
