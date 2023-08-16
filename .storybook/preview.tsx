import React, { useMemo } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CssBaseline, ThemeProvider } from "@mui/material"
import { lightTheme } from "../src/themes/light.theme"
import { darkTheme } from "../src/themes/dark.theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </LocalizationProvider>
  )
};

export const decorators = [withMuiTheme];


export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};

