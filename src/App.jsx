import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import {Routes, Route, Navigate} from "react-router-dom"
import { use, useState } from "react"
import { useEffect } from "react"


function App() {
  
  let [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") == "true");
  let [userName, setUserName] = useState(localStorage.getItem("userName") || '');

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('userName', userName);
  }, [isAuthenticated, userName])


  console.log(isAuthenticated);

  let handleLogin = (userName) =>{
    setIsAuthenticated(true);
    setUserName(userName);
  }
  let handleLogout = () => {
    setIsAuthenticated(false);
    setUserName("");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userName");
  }
  return (
    <>
     <Routes>
      <Route path="/login" element= { isAuthenticated ?  <Navigate to="/Dashboard" /> : <Login onLogin={handleLogin} /> } />
      <Route path="/register" element= { isAuthenticated ?  <Navigate to="/Dashboard" /> : <Register onLogin={handleLogin} /> }  />
      <Route path="/dashboard" element= { isAuthenticated ? <Dashboard user={userName} onLogout={handleLogout} /> : <Navigate to="/login" /> } />
      <Route path="*" element= { <Login  onLogin={handleLogin} /> } />
     </Routes>
    </>
  )
}

export default App
