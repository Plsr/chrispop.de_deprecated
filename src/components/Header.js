import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

import { primaryColor } from '../utils/colors.js'

class Header extends React.PureComponent {
  render() {
    const { siteTitle } = this.props

    return (
      <Wrapper>
        <Title>
          <Link to={'/'} style={{ color: '#333333', backgroundImage: 'none'}} >
            {siteTitle}
          </Link>
        </Title>
      </Wrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: React.PropTypes.string.isRequired
}

const Wrapper = glamorous.div({
  padding: '40px 0',
  marginBottom: 40
})

const Title = glamorous.h1({
  margin: 0,
  fontSize: 36,
  display: 'inline',
  borderBottom: `4px solid ${primaryColor}`
})

export default Header
