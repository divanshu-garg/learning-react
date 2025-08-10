import { useContext } from "react";
import ThemeContext from "../context/themeContext";

function useTheme(){
    return useContext(ThemeContext);
}

export default useTheme;