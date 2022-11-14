import { useParams} from "react-router-dom";
import Card from "./Card";
import {Link} from "react-router-dom";
import boy from "../images/boy sitting at the desk with open book.png";
import Navbar from "./Navbar";
import "./About.css";
import right from "../images/Right.png";
import left from "../images/Left.png";
function User()
{ const {id,token}=useParams();
console.log({id})
    return(
        <>
       <Navbar home="" about="" signin="" hometitle="" abouttitle="" signintitle="Logout"/>

        <div class="menu" id="explore">
     
        <div class="container">
           <Link to={"/createpost/"+id+"/"+token}> <Card desc="Create A Post" img={boy}/></Link>
            <Link to={"/mypost/"+id+"/"+token}> <Card desc="Posts Made By You" img={boy}/> </Link>
            <Link to="/pending"> <Card desc="Pending Requests" img={boy}/> </Link>
        </div>
      
        </div>
        <img src={right} class="rightbottomdown"></img>
          <img src={left} class="leftbottomdown"></img>
        </>
    )
}
export default User;