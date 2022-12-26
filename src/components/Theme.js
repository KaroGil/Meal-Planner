// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const themes = {
    config: {
        initialColorMode: 'light',
        useSystemColorMode: true,
    },
    styles:{
        global:{
            body: {
                margin: 0,
               "font-family":
               "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", 
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
              },
              code: {
                "font-family":
                "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
            },
        },
    },
}

// 3. extend the theme
const theme = extendTheme({ themes })

export default theme;