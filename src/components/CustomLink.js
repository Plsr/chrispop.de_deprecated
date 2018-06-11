import React from 'react'
import Link from 'gatsby-link'

class CustomLink extends React.PureComponent {
  render() {
    const { to, children } = this.props

    return (
      <Link
        to={to}
      >
        { children }
      </Link>
    )
  }
}
