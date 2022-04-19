import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { GlobalStyles } from './theme/GlobalStyles';
import './App.css';
import RoutesLogic from './routes';

function App() {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return (
    themeLoaded && (
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <RoutesLogic />
      </ThemeProvider>
    )
  );
}

export default App;
