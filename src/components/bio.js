import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(1),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
            borderRadius: '20%',

              }}
              imgStyle={{
                borderRadius: `20%`,
              }}
            />
            <p style={{ maxWidth: 310 }}>
              Articles on Software Engineering by <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer"> Developerayo.</a> (Developer Advocate & Engineer at VanHack).
              {` `}
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

 

export default Bio
