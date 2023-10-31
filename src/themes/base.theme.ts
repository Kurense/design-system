import { createTheme } from "@mui/material";
import "typeface-inter"

export const themeColors = {
  blue1: `#2C79C9`,
  blue2: `#65AAD6`,
  blue3: `#A6C0D9`,
  blue4: `#EBF2F9`,
  blue5: `#3E8CED`,
  white: `#FFFFFF`,
  gray1: `#707070`,
  gray2: `#979899`,
  gray3: `#AFAFAF`,
  gray4: `#C8C8C9`,
  gray5: `#F5F5F5`,
  gray6: `#FAFAFA`,
  green1: `#A5BE00`,
  green2: `#D5E663`,
  green3: `#E4EF99`,
  green4: `#EDF2CB`,
  semanticBlue1: `#C0DCEF`,
  semanticBlue2: `#EBF2F9`,
  yellow1: `#F4CA3E`,
  yellow2: `#F9DF9E`,
  yellow3: `#FCEBB4`,
  yellow4: `#FFF7E3`,
  red1: `#F75D5D`,
  red2: `#FFC6C6`,
  red3: `#FDE1E1`,
  red4: `#FCEBEB`,
  sematicGray1: `#909090`,
  sematicGray2: `#E2E2E2`,
  disabledGray: `#E6E6E6`,
  errorText: `#E30404`,
}

export const baseTheme = createTheme({
  spacing: 14,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: `contained`,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: `hover`,
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: `outlined`,
      }
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: '2.215rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '1.8125rem'
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: '1.5625rem'
    },
    h4: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.1875rem'
    }
  }
});