import React, { useState } from "react";

function App() {
 const [darkMode, setDarkMode] = useState(false);

 return (
   <div className={`App ${darkMode ? 'dark' : 'light'}`}>
     <button onClick={() => setDarkMode(!darkMode)}>
       Toggle Dark Mode
     </button>
    
   </div>
 );
}

export default App;