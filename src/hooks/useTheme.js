import { useEffect, useState } from 'react';

export const useTheme = () => {
  const themes = JSON.parse(window.localStorage.getItem('all-themes'));
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded };
};
