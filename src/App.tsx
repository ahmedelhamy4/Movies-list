import './App.css';
import { Home } from './pages';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#212121',
      paper: '#333',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div>
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
