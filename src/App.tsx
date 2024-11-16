import { useEffect } from 'react';
import Router from './router';

function App() {
  useEffect(() => {
    const storedTheme = localStorage.getItem('settings');
    if (storedTheme) {
      const themeSettings = JSON.parse(storedTheme);
      document.body.classList.add(themeSettings.mode);
    }
  }, []);

  return <Router />;
}

export default App;
