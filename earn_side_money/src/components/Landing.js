import down from "../images/down.png";
import money from "../images/money 1.png";
import up from "../images/Vector.png";
import low from "../images/Vector (1).png";
import Explore from "./Explore";
import Navbar from "./Navbar.js";
function Landing()
{
return(
    <>
    <Navbar home="" about="about" signin="login" hometitle="Home" abouttitle="About" signintitle="SignIn/SignUp"/>
    <div class="landing" >
        <div class="heading">
            <p>Earn Side Money</p>
        </div>
        <div class="explore">Explore Ways To Earn</div>
        <div class="arrow">
            <a href="#explore">
            <img src={down} class="down"></img>
            </a>
        </div>
      <img src={money} class="rightbottom"></img>
      <img src={low} class="leftbottomup"></img>
      <img src={up} class="leftbottomlow"></img>
      
        
        </div>
        <Explore/>
    </>
)
}
export default Landing;