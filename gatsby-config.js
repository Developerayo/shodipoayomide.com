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
        url: `https://twitter.com/developerayo`,
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
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
