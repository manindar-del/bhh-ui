/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable mui-path-imports/mui-path-imports */
import { PaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";
import { pallete, primaryColors } from "./_muiPalette";

/**
 * The function `MuiThemeOptions` returns a configuration object for the Material-UI theme based on the
 * provided mode (light or dark) and includes customizations for various components and typography.
 * @param {PaletteMode} mode - The `mode` parameter is of type `PaletteMode` and is used to determine
 * the color palette mode for the theme. The `PaletteMode` type can have two possible values: "light"
 * or "dark".
 * @returns The function `MuiThemeOptions` returns a `ThemeOptions` object.
 */
export const MuiThemeOptions = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: pallete(mode),
    typography: {
      fontFamily: ["Montserrat"].join(","),
      fontSize: 16,
      h1: {
        fontSize: "48px",
        lineHeight: "1.1em",
        fontWeight: "700",
        fontFamily: "Raleway",
        "@media(max-width:991px)": {
          fontSize: "22px",
          lineHeight: "1.1em"
        }
      },
      h2: {
        fontSize: "36px",
        lineHeight: "1.1em",
        fontWeight: "400",
        fontFamily: "Raleway",
        "@media(max-width:991px)": {
          fontSize: "22px",
          lineHeight: "26px"
        }
      },
      h3: {
        fontSize: "27px",
        lineHeight: "1.1em",
        fontWeight: "700",
        fontFamily: "Raleway",
        "@media(max-width:991px)": {
          fontSize: "18px",
          lineHeight: "1.1em"
        }
      },
      h4: {
        fontSize: "18px",
        lineHeight: "1.3",
        fontWeight: "500",
        fontFamily: "Raleway",
        "@media(max-width:991px)": {
          fontSize: "16px",
          lineHeight: "1.3"
        }
      },
      h5: {
        fontSize: "15px",
        lineHeight: "1.4",
        fontWeight: "500",
        fontFamily: "Raleway",
        "@media(max-width:991px)": {
          fontSize: "12px",
          lineHeight: "1.4"
        }
      },
      h6: {
        fontSize: "12px",
        lineHeight: "1.5",
        fontWeight: "500",
        fontFamily: "Raleway",
        "@media(max-width:991px)": {
          fontSize: "12px",
          lineHeight: "1.5"
        }
      },
      body1: {
        fontSize: "16px",
        lineHeight: "1.5em",
        color: "#8F98A8"
      },
      body2: {
        fontSize: "12px",
        lineHeight: "1.5em",
        color: "#8F98A8"
      },
      caption: {
        fontSize: "14px",
        lineHeight: "1.5em",
        color: "#8F98A8"
      }
    },

    components: {
      MuiSkeleton: {
        defaultProps: {
          animation: "wave"
        }
      },
      MuiCard: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            return {
              borderRadius: "8px",
              boxShadow: `0px 4px 24px 0px ${primaryColors.cardShadow}`
            };
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            if (
              ownerState.variant === "filled" &&
              ownerState.color === "default"
            ) {
              return {
                backgroundColor: primaryColors?.bodyColor,
                color: primaryColors.mainFontColor,
                "&:hover": {
                  backgroundColor: primaryColors?.bodyColor,
                  color: primaryColors.mainFontColor
                }
              };
            }
            if (
              ownerState.variant === "filled" &&
              ownerState.color === "success"
            ) {
              return {
                backgroundColor: primaryColors?.lightGreen,
                color: primaryColors?.deepGreen,

                "&:hover": {
                  backgroundColor: primaryColors?.lightGreen,
                  color: primaryColors?.deepGreen
                }
              };
            }

            if (
              ownerState.variant === "filled" &&
              ownerState.color === "secondary"
            ) {
              return {
                backgroundColor: primaryColors?.secondary,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.secondaryBorder}`,
                "&:hover": {
                  background: primaryColors?.secondaryBorder,
                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "filled" &&
              ownerState.color === "error"
            ) {
              return {
                backgroundColor: primaryColors?.chipErrorBg,
                color: primaryColors?.chipErrorText,
                "&:hover": {
                  backgroundColor: primaryColors?.chipErrorBg,
                  color: primaryColors?.chipErrorText
                }
              };
            }

            if (
              ownerState.variant === "filled" &&
              ownerState.color === "warning"
            ) {
              return {
                backgroundColor: primaryColors?.warning_color,
                color: primaryColors?.warning_text,
                "&:hover": {
                  backgroundColor: primaryColors?.warning_color,
                  color: primaryColors?.warning_text
                }
              };
            }

            if (
              ownerState.variant === "outlined" &&
              ownerState.color === "info"
            ) {
              return {
                backgroundColor: primaryColors?.white,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.disabledBg}`,

                "&:hover": {
                  background: primaryColors?.disabledBg,
                  borderColor: primaryColors?.disabledBg,

                  color: primaryColors?.white
                }
              };
            }
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: () => {
            return {
              "@media(max-width:991px)": {
                minHeight: "20px"
              }
            };
          }
        }
      },
      MuiMenu: {
        defaultProps: {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          PaperProps: {
            elevation: 0
          }
        },
        styleOverrides: {
          paper: ({ theme }) => {
            return {
              overflow: "visible !important",
              filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))",
              marginTop: "6px",

              "@media(max-width:991px)": {
                marginTop: "0"
              }
            };
          },
          list: () => {
            return {
              paddingTop: "4px",
              paddingBottom: "4px"
            };
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => {
            if (
              ownerState.variant === "contained" &&
              ownerState.color === "primary"
            ) {
              return {
                // backgroundColor: primaryColors?.primary,
                background: `${primaryColors.primary1}`,
                borderRadius: "8px",

                "&:hover": {
                  background: ` ${primaryColors.colord92b2f}`,
                  color: primaryColors?.white
                }
              };
            }
            if (
              ownerState.variant === "contained" &&
              ownerState.color === "success"
            ) {
              return {
                backgroundColor: primaryColors?.info,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.infoBorder}`,
                "&:hover": {
                  background: primaryColors?.infoBorder,
                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "contained" &&
              ownerState.color === "secondary"
            ) {
              return {
                backgroundColor: primaryColors?.secondary,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.secondaryBorder}`,
                "&:hover": {
                  background: primaryColors?.secondaryBorder,
                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "contained" &&
              ownerState.color === "error"
            ) {
              return {
                backgroundColor: primaryColors?.errorMain,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.errorMain}`,
                "&:hover": {
                  background: primaryColors?.errorMain,
                  color: primaryColors?.white
                }
              };
            }
            if (
              ownerState.variant === "outlined" &&
              ownerState.color === "info"
            ) {
              return {
                backgroundColor: primaryColors?.white,
                color: primaryColors?.primary1,
                border: `1px solid ${primaryColors?.primary1}`,

                "&:hover": {
                  background: primaryColors?.primary1,
                  borderColor: primaryColors?.primary1,

                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "outlined" &&
              ownerState.color === "inherit"
            ) {
              return {
                backgroundColor: primaryColors?.white,
                color: primaryColors?.black,
                border: `1px solid ${primaryColors?.disabledBg}`,

                "&:hover": {
                  background: primaryColors?.disabledBg,
                  borderColor: primaryColors?.disabledBg,

                  color: primaryColors?.black
                }
              };
            }
          }
        },
        defaultProps: {
          disableElevation: true
        }
      },

      MuiBackdrop: {
        styleOverrides: {
          root: {
            // backdropFilter: "blur(4px)"
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          indicator: ({ theme }) => ({
            backgroundColor: theme?.palette?.primary.main
          })
        }
      }
    }
  };
};
