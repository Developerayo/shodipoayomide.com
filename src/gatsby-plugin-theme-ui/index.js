import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  initialColorMode: `initialColorMode`,
  colors: {
    ...novelaTheme.colors,
    primary: 'red',
    secondary: 'red',
    accent: 'red',
    grey: 'red',
    background: 'red',
  },
};