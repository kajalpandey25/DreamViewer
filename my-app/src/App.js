
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import WhatsAppChatButton from './component/whatappChatButton/WhatsappChatButton';

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily:'cursive', 

    h1: {
      fontSize: '4rem', // Custom font size for h1
      '@media (min-width: 600px)': {
        fontSize: '5rem', // Adjust for medium screens and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '6rem', // Adjust for large screens and larger
      },
    },
    h2: {
      fontSize: '2.5rem', // Custom font size for h2
      '@media (min-width: 600px)': {
        fontSize: '2.7rem', // Adjust for medium screens and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '3rem', // Adjust for large screens and larger
      },
    },
    h3: {
      fontSize: '1.6rem', // Custom font size for h3
      '@media (min-width: 600px)': {
        fontSize: '1.8rem', // Adjust for medium screens and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '2rem', // Adjust for large screens and larger
      },
    },
    h4: {
      fontSize: '1rem', // Custom font size for h4
      '@media (min-width: 600px)': {
        fontSize: '1.2rem', // Adjust for medium screens and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '1.4rem', // Adjust for large screens and larger
      },
    },
    h5: {
      fontSize: '0.9rem', // Custom font size for h5
      '@media (min-width: 600px)': {
        fontSize: '1rem', // Adjust for medium screens and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '1.2rem', // Adjust for large screens and larger
      },
    },
    h6: {
      fontSize: '0.8rem', // Custom font size for h6
      '@media (min-width: 600px)': {
        fontSize: '0.9rem', // Adjust for medium screens and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '1rem', // Adjust for large screens and larger
      },
    },
    body1: {
      fontSize: '1rem', // Custom font size for body1
      '@media (min-width: 600px)': {
        fontSize: '1.2rem', // Adjust for medium screens and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '1.3rem', // Adjust for large screens and larger
      },
    },
    body2: {
      fontSize: '0.9rem', // Custom font size for body2
      '@media (min-width: 600px)': {
        fontSize: '.9rem', // Adjust for medium screens and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '1rem', // Adjust for large screens and larger
      },
    },
    // Add more typography customizations as needed
  },
});


// Make the font sizes responsive
const responsiveTheme = responsiveFontSizes(theme);

function App() {
  return (
   <>
    <ThemeProvider theme={responsiveTheme}>
      <div className="App">
        <AllRoutes />
      </div>
      {/* <WhatsAppChatButton/> */}
    </ThemeProvider>
   
    </>
  );
}

export default App;
