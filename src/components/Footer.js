import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

class Footer extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Content>
          <Item><Link to="/about">About</Link></Item>
          <Item><Link to="/imprint">Impressum</Link></Item>
          <Item><Link to="/privacy">Datenschutzerklärung</Link></Item>
        </Content>
      </Wrapper>
    )
  }
}

const Wrapper = glamorous.div({
  backgroundColor: '#ede6e3',
})

const Content = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: 700,
  padding: 20
})

const Item = glamorous.span({
  padding: '0 10px',
  fontSize: 12
})

export default Footer
