import ThemeProvider from './contexts/ThemeContext';
import LandingPage from './pages/Landing';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
