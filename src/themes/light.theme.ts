import { createTheme } from "@mui/material";
import { baseTheme, themeColors } from "./base.theme";

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: themeColors.blue1,
    },
    error: {
      main: themeColors.errorText,
    }
  },
  components: {
    ...baseTheme.components,
    MuiButton: {
      ...baseTheme.components?.MuiButton,
      styleOverrides: {
        root: ({ownerState}) => ({
          ...(ownerState.variant === 'contained' &&
            {
              textTransform: `initial`,
              boxShadow: `none`,
              padding: baseTheme.spacing(1),
              paddingY: baseTheme.spacing(1),
              fontSize: `1rem`,

              '&:hover': {
                backgroundColor: themeColors.blue4,
                color: themeColors.blue1,
                boxShadow: `none`
              },
              '&.Mui-disabled': {
                backgroundColor: themeColors.gray2,
                color: themeColors.white,

              },
            }),
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: themeColors.blue4,
          border: `1px solid transparent`,
          '&:hover': {
            border: `1px solid ${themeColors.blue2}`,
            boxShadow: `0px 0px 6px ${themeColors.blue2}`,
          },

          '&.Mui-disabled': {
            backgroundColor: themeColors.disabledGray ,
            border: `none`,
            boxShadow: `none`,
          },

          '&.Mui-error': {
            backgroundColor: `#FDF4F4`,
            border: `1px solid transparent`,
            boxShadow: `none`,

            // input: {
            //   color: `#F29595`,
            // },
          },
        },
        input: {
          color: themeColors.gray1,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: `.875rem`,
          marginLeft: 0,
          '&.Mui-error': {
            color: themeColors.errorText,
          }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: () => ({
          // backgroundColor: themeColors.blue4,
          border: `none`,

        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: themeColors.gray4,

          '&.Mui-checked': {
            color: themeColors.blue1,
          },

          '&.Mui-disabled': {
            color: themeColors.gray4
          }

        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: themeColors.gray1,
          fontWeight: '700',
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: '6px',
        },
      }
    }
  }
});