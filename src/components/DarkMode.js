import React, {useContext, useState} from "react";

const ThemeContext = React.createContext();

export const DarkMode = () => {
    
    const [darkMode, setDarkMode] = useState(false);

    return(
       <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            <button onClick={() => setDarkMode(!darkMode)}>DarkMode</button>
       </ThemeContext.Provider>
    );
}