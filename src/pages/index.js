import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'

import PostTitle from '../components/PostTitle'
import PostDate from '../components/PostDate'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <PostWrapper key={node.fields.slug}>
              <PostTitle to={node.fields.slug}>
                  {title}
              </PostTitle>
              <PostDate>{node.frontmatter.date}</PostDate>
              <p dangerouslySetInnerHTML={{ __html: node.html }} />
            </PostWrapper>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

const PostWrapper = glamorous.div({
  marginBottom: 120,
  ':last-child': {
    marginBottom: 0
  }
})

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { fileAbsolutePath: { glob: "**/posts/**" } }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
