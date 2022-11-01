import Card from "./Card";
import {Link} from "react-router-dom";
import down from "../images/down.png";
import boy from "../images/boy sitting at the desk with open book.png";
import up from "../images/Vector (2).png";
import low from "../images/Vector (3).png";

function Explore()
{
    return(
        <>
        <div class="landing" id="explore">
        <div class="arrow">
        <a href="#home"><img src={down} class="up"/></a>
        </div>
        <div class="container">
           <Link to="/pending"> <Card desc="Want to get your work done??" img={boy}/></Link>
            <Link to="/freelancing"> <Card desc="Freelance Opportunities" img={boy}/> </Link>
        </div>
        <img src={low} class="rightbottomup"></img>
      <img src={up} class="rightbottomlow"></img>
        </div>
           
            
        </>
    )
}
export default Explore;