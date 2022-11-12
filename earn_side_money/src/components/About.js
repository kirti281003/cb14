import "./About.css";
import right from "../images/Right.png";
import left from "../images/Left.png";
import Navbar from "./Navbar";

import React from 'react'
const About = () => {

  return (
    <>
    <Navbar home="" about="about" signin="login" hometitle="Home" abouttitle="About" signintitle="SignIn/SignUp"/>
    <div className="about">
      <h2>ABOUT</h2>
      <p class="aboutcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo,
       maxime harum maiores aliquid nisi illum quae eligendi amet numquam officia consectetur a distinctio
        provident temporibus saepe repellat sequi dicta delectus beatae modi dolore. Lorem ipsum dolor sit
         amet consectetur adipisicing elit. Natus aspernatur doloribus, distinctio error explicabo sequi commodi
          amet modi, animi, dolor quisquam! In, mollitia voluptates! Dolorum doloribus explicabo saepe illo ad. 
          Perferendis esse harum aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sint, iure,
           voluptas dolores, tempora necessitatibus deleniti.</p>
    <img src={right} class="rightbottomdown"></img>
          <img src={left} class="leftbottomdown"></img>
    </div>
    </>
    
  );
}

export default About;
