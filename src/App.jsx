import './App.css'
import LandingPage from './pages/Landing'
import NavBar from './components/NavBar'
import { ThemeProvider, createTheme } from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      main: '#6366F1',
    },
    secondary: {
      main: '#4B5563',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
