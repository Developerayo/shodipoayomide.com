import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';


export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    primary: 'black',
    secondary: '#73737D',
    accent: 'grey',
    grey: 'black',
    background: 'white',
    gradient: "red",
  },
};