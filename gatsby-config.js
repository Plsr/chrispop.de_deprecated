module.exports = {
  siteMetadata: {
    title: "chrispop.de",
    description: "Ein Blog? In 2018? Das ist doch quatsch!",
    author: "Christian Poplawski",
    siteUrl: "https://chrispop.de"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/pages`,
        name: "pages",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
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
              }
            `,
            feeds: [
              {
                serialize: ({ query: { site, allMarkdownRemark } }) => {
                  return allMarkdownRemark.edges.map(edge => {
                    return Object.assign({}, edge.node.frontmatter, {
                      description: edge.node.excerpt,
                      url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                      custom_elements: [{ "content:encoded": edge.node.html }],
                    })
                  })
                },
                query: `
                  {
                    allMarkdownRemark(
                      limit: 1000,
                      sort: { order: DESC, fields: [frontmatter___date] },
                      filter: { fileAbsolutePath: { glob: "**/posts/**" } }
                    ) {
                      edges {
                        node {
                          excerpt
                          html
                          fields { slug }
                          frontmatter {
                            title
                            date
                          }
                        }
                      }
                    }
                  }
                `,
                output: "/rss.xml",
              },
            ],
          },

    }
  ],
}
