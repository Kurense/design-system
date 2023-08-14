import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { darkTheme } from '../../themes/dark.theme'

export type ThemeProviderProps = {
  children: any
}
export const ThemeProvider = ({children}: ThemeProviderProps) => (
  <MuiThemeProvider theme={darkTheme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
