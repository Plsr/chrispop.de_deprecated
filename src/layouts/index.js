import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

import Footer from '../components/Footer'
import Header from '../components/Header'

class Template extends React.PureComponent {
  render() {
    const { location, children } = this.props
    const siteTitle = this.props.data.site.siteMetadata.title
    const header = (
      <h1>
        <Link to={'/'} >
          {siteTitle}
        </Link>
      </h1>
    )
    return (
      <div>
        <Wrapper>
          <Header siteTitle={siteTitle} />
            {children()}
        </Wrapper>
        <Footer />
      </div>
    )
  }
}


const Wrapper = glamorous.div({
  maxWidth: 700,
  margin: '0 auto',
  padding: '0 20px'
})

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
