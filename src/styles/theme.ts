import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    heading: {
      light: "#F5F8FA",
      dark: "#47585B",
    },
    darkInfo: "#999999",
    highlight: "#FFBA08",
  },
  styles: {
    global: {
      body: {
        padding: 0,
        margin: 0,
      }
    },

  }
})

export default theme;