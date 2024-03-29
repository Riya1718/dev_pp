import React, { useState} from 'react';
import Profile from "./Profile";
import Settings from "./Settings";

export const ThemeContext = React.createContext();

export function App() {

  const[lightTheme , setTheme] = useState(true);

  function toggleTheme(){
      setTheme((prevTheme) => !prevTheme);
  }
  
  return (
    <ThemeContext.Provider value={lightTheme}>
    <div className="App">
      <button onClick={toggleTheme}>ToggleTheme</button>
      <div>
       <Profile></Profile>
      <ThemeContext.Provider value={!lightTheme}> 
       <Settings></Settings>
      </ThemeContext.Provider>
       </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
