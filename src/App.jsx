// paginas
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"

//BrowserRouter imports 

import { Routes, Route, Navigate } from "react-router-dom"

//userContext import

import { UserContext } from "./contexts/userContext"
import { useContext, useEffect } from "react"

//firebase 
import { onAuthStateChanged, getAuth } from "firebase/auth"


export function App() {
 
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])
 

  const { user, setUser} = useContext(UserContext) 

  return (
    <div>
      
        <Routes>
          <Route path="/login" element={ user ? < Navigate to="/"  /> : <Login />} />
          <Route path="/" element={user ?  <Home/> : <Navigate to="/login" />} />
        </Routes>
    </div>
  )
}


