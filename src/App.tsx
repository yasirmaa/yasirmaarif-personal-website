import ThemeProvider from './contexts/ThemeContext';
import LandingPage from './pages/landing';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
