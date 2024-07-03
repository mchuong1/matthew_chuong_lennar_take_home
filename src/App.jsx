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
  components: {
    MuiModal: {
      styleOverrides: {
        backdrop: {
          backgroundColor: 'rgba(107, 114, 128, 0.5)', // Change this to your desired color
        },
      },
    },
  },
});

const theme = {
  ...defaultTheme,
  typography: {
    ...defaultTheme.typography,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800,
      color: 'white',
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
    subtitle1: {
      fontSize: '16px',
      lineHeight: '24px',
      color: '#D1D5DB',
      fontWeight: 400,
      textAlign: 'left',
      margin: '16px 0',
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      [defaultTheme.breakpoints.up('lg')]: {
        fontSize: '24px',
        lineHeight: '28px',
      },
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: '24px',
        lineHeight: '28px',
      },
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: '20px',
      color: '#D1D5DB',
      margin: '16px 0',
      textAlign: 'left',
      [defaultTheme.breakpoints.up('sm')]: {
        width: '509px',
      },
    }
  }
};

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
