import React from "react"
import { Link, graphql } from "gatsby"
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, slug } = this.props.pageContext
    console.log(this.props.pageContext)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date} • {post.timeToRead} min read
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div style={{ display: "flex" }}>
          <TwitterShareButton
            title={post.frontmatter.title}
            url={`https://www.shodipoayomide.com${slug}`}
            style={{padding: `0 0.3rem`}}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>

          <FacebookShareButton
            title={post.frontmatter.title}
            url={`https://www.shodipoayomide.com${slug}`}
            style={{padding: `0 0.3rem`}}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>

          <LinkedinShareButton
            title={post.frontmatter.title}
            url={`https://www.shodipoayomide.com${slug}`}
            style={{padding: `0 0.3rem`}}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>

          <RedditShareButton
            title={post.frontmatter.title}
            url={`https://www.shodipoayomide.com${slug}`}
            style={{padding: `0 0.3rem`}}
          >
            <RedditIcon size={40} round={true} />
          </RedditShareButton>

          <WhatsappShareButton
            title={post.frontmatter.title}
            url={`https://www.shodipoayomide.com${slug}`}
            style={{padding: `0 0.3rem`}}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        </div>
        <hr
          style={{
            marginBottom: rhythm(1),
            marginTop: rhythm(0.5),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `block`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
