module.exports = {
  siteMetadata: {
    title: `Senior Developer Advocate`,
    name: `Shodipo Ayomide`,
    siteUrl: `https://shodipoayomide.com`,
    description: `Senior Developer Advocate from Lagos, Nigeria Media Developer Expert at Cloudinary and Technical Instructor at egghead.io`,
    hero: {
      heading: `Senior Developer Advocate from Lagos, Nigeria Media Developer Expert at Cloudinary and Technical Instructor at egghead.io`,
      maxWidth: 1500,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/developerayo`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
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
