import Auth from './Auth'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./Login.css"

function Login() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default Login