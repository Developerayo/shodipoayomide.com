module.exports = {
  siteMetadata: {
    title: `Senior Developer Advocate`,
    name: `Shodipo Ayomide`,
    siteUrl: `https://shodipoayomide.com`,
    description: `Senior Developer Advocate from Lagos, Nigeria Media Developer Expert at Cloudinary and Technical Instructor at egghead.io`,
    hero: {
      heading: ``,
      maxWidth: 700,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/developerayo_`,
      },
      {
        name: `github`,
        url: `https://github.com/developerayo`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/developerayo`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/shodipo-ayomide`,
      },
      {
        name: `devto`,
        url: `https://dev.to/developerayo`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
      {
        resolve: "gatsby-plugin-mailchimp",
        options: {
          endpoint: "https://shodipoayomide.us18.list-manage.com/subscribe/post?u=0b8d2ee1cb63c6f51cc1d8b9d&amp;id=7fe993900c", // mailchimp endpoint
        },
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shodipo Ayomide`,
        short_name: `Developerayo`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125265218-1",
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
