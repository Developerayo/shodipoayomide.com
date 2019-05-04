import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class talks extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
      <SEO title="Talks" />
      <h1>Upcoming Talks</h1>
      <p>1)<b>Conference Name:</b> Full Stack Developers Conference,<br /> &nbsp;&nbsp;&nbsp;<b>City:</b> Lekki, Lagos, Nigeria,<br />&nbsp;&nbsp;&nbsp;
      <b>Topic:</b> Getting started with GraphQL (From Zero to Hero)<br />&nbsp;&nbsp;&nbsp;<b>Date:</b> 4th Janyary 2019
      </p>

      <p>2)<b>Conference Name:</b> Wordpress Conference,<br /> &nbsp;&nbsp;&nbsp;<b>City:</b> Lagos, Nigeria,<br />&nbsp;&nbsp;&nbsp;
      <b>Topic:</b> Remote Work on a new level<br />&nbsp;&nbsp;&nbsp;<b>Date:</b> 11th Janyary 2019
      </p>

      <h1>Past Talks</h1>
      <p>1)<b>Conference Name:</b> NodeJS Conference,<br /> &nbsp;&nbsp;&nbsp;<b>City:</b> Lagos, Nigeria,<br />&nbsp;&nbsp;&nbsp;</p>
      <p>2)<b>Conference Name:</b> DevFest Lagos,<br /> &nbsp;&nbsp;&nbsp;<b>City:</b> Lagos, Nigeria,<br />&nbsp;&nbsp;&nbsp;
      </p>
      <p>3)<b>Conference Name:</b> DevFest,<br /> &nbsp;&nbsp;&nbsp;<b>City:</b> Lagos, Nigeria,<br />&nbsp;&nbsp;&nbsp;
      </p>
      <p>4)<b>Conference Name:</b> DevFest Ikorodu,<br /> &nbsp;&nbsp;&nbsp;<b>City:</b> Lagos, Nigeria,<br />&nbsp;&nbsp;&nbsp;
      </p>
      <center><p>...</p></center>



      </Layout>
    )
  }
}

export default talks

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`