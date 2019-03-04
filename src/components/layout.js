import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(0.75),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontFamily: `Montserrat, Montserrat`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#222222`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, Montserrat`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `var(--pink)`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer align="left" style={{ marginTop: `100px` }}>
          <a href="http://linkedin.com/in/shodipo.ayomide">Linkedin</a>
          {` `}
          <a href="http://twitter.com/developerayo">Twitter</a>
          {` `}
          <a href="http://github.com/developerayo">GitHub</a>
          {` `}
          <a href="http://fb.com/shodipo.ayomide">Facebook</a>
          {` `}
          <div />
        </footer>
      </div>
    )
  }
}

export default Layout
