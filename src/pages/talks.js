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
        <p>
          NULL
        </p>

        <h1>Past Talks</h1>
        <p>
          <b>Conference Name:</b> Studio 14{" "}
          <b>(Company Workshop with it's Staffs)</b>
          <br /> &nbsp;&nbsp;&nbsp;<b>Location:</b> Studio 14 Office, Maryland,
          Lagos, Nigeria,
          <br />
          &nbsp;&nbsp;&nbsp;
          <b>Topic:</b> Building better teams through remote working <br />
          &nbsp;&nbsp;&nbsp;<b>Date:</b> 06th June 2019
        </p>
        <p>
          <b>Conference Name:</b> WordCamp Lagos Conference 2019
          <br /> &nbsp;&nbsp;&nbsp;<b>Location:</b> Zone Tech Park, Lagos,
          Nigeria,
          <br />
          &nbsp;&nbsp;&nbsp;
          <b>Topic:</b> Remote Work <br />
          &nbsp;&nbsp;&nbsp;<b>Date:</b> 11th January 2019
        </p>
        <p>
          <b>Conference Name:</b> Full Stack Developers Conference,
          <br /> &nbsp;&nbsp;&nbsp;<b>Location:</b> Lekki, Lagos, Nigeria,
          <br />
          &nbsp;&nbsp;&nbsp;
          <b>Topic:</b> Getting started with GraphQL (From Zero to Hero)
          <br />
          &nbsp;&nbsp;&nbsp;<b>Date:</b> 4th Janyary 2019
        </p>
        <p>
          <b>Conference Name:</b> NodeJS Conference,
          <br /> &nbsp;&nbsp;&nbsp;<b>Location:</b> Zone Tech Park, Lagos,
          Nigeria,
          <br />
          &nbsp;&nbsp;&nbsp;
        </p>
        <p>
          <b>Conference Name:</b> DevFest Lagos,
          <br /> &nbsp;&nbsp;&nbsp;<b>Location:</b> Zone Tech Park, Lagos,
          Nigeria,
          <br />
          &nbsp;&nbsp;&nbsp;
        </p>
        <p>
          <b>Conference Name:</b> DevFest Uyo
          <br /> &nbsp;&nbsp;&nbsp;<b>Location:</b> Uyo, Nigeria,
          <br />
          &nbsp;&nbsp;&nbsp;
        </p>
        <p>
          <b>Conference Name:</b> DevFest Ikorodu,
          <br /> &nbsp;&nbsp;&nbsp;<b>Location:</b> Ikorodu, Lagos, Nigeria,
          <br />
          &nbsp;&nbsp;&nbsp;
        </p>
        <center>
          <p>...</p>
        </center>
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
