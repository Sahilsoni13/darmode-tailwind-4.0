import React from 'react';
import { useTheme } from './ThemeProvider';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200  text-gray-800 dark:text-gray-200 rounded dark:bg-black"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default DarkModeToggle;
