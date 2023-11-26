import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginBottom: '1rem',
        },
      },
    },
  },
})

export default theme
