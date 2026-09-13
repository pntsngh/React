import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeDisplay = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div>
            <h1>Theme Display</h1>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Switch Theme</button>
        </div>
    )
}

export default ThemeDisplay