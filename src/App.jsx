import './App.css'
import LandingPage from './pages/Landing'
import NavBar from './components/NavBar'
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 835,
      md: 1080,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#6366F1',
    },
    secondary: {
      main: '#4B5563',
    },
    background: {
      default: '#111827',
      paper: '#111827',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

const theme = {
  ...defaultTheme,
  typography: {
    ...defaultTheme.typography,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '48px',
        lineHeight: '48px',
        width: '392px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '60px',
        lineHeight: '60px',
        width: '492px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '72px',
        lineHeight: '72px',
        width: '592px',
      },
    },
  },
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
