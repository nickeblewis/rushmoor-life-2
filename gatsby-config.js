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
              maxWidth: 800,
              quality: 90,
              linkImagesToOriginal: false,
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
