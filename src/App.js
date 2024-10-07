import "./App.css";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import { useEffect, useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState([JSON.parse(localStorage.getItem("darkMode"))] || false);
  useEffect(()=>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if(darkMode){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
    
    },[darkMode]);
  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <AllRoutes />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    
    </div>
  );
}

export default App;
