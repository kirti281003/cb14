import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.js";
import Explore from "./components/Explore.js";
import About from "./components/About.js";
import Login from './loginPage/Auth.js';
import Navbar from "./components/Navbar.js";
import "./loginPage/Login.css";
import Freelancing from "./components/Freelancing.js";
import Pending from "./components/Pending.js";
import User from "./components/User.js";
import PostForm from './components/PostForm';
import MyPost from './components/MyPost';


function App() {
  return (
    <>
   <BrowserRouter>
    <Navbar />
      <Routes>
          <Route index element={<Landing/>} />
          <Route path="explore" element={<Explore/>}/>
          <Route path="about" element={<About />}/>
          <Route path="login" element={<Login/>}/>
          <Route path="freelancing" element={<Freelancing/>}/>
          <Route path="pending" element={<Pending/>}/>
          <Route path="user/:id/:token" element={<User/>}/>
          <Route path="createpost/:id/:token" element={<PostForm/>}/>
          <Route path="mypost/:id/:token" element={<MyPost/>}/>
         
      </Routes>
    </BrowserRouter>

 
    </>
  );
}

export default App;
