import { Theme } from "@emotion/react";
import { Components, createTheme } from "@mui/material";

const components: Components<Omit<Theme, 'components'>> = {};

const theme = createTheme({
  cssVariables: {
  colorSchemeSelector: 'data-toolpad-color-scheme',
},
colorSchemes: { light: true, dark: true },
breakpoints: {
  values: {
    xs: 0,
    sm: 600,
    md: 600,
    lg: 1200,
    xl: 1536,
  },
}, 
...components});

export default theme;