import { createContext } from "react";

// this is being manipulated by the themeContext provider used in App.js
const ThemeContext = createContext('lightMode');

export default ThemeContext;