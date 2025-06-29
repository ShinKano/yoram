module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Forty V2',
    author: 'Hunter Chang',
    description: 'A Gatsby.js V2 Starter based on Forty by HTML5 UP',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-preload-fonts',
  ],
};
