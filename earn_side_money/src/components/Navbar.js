import {Link} from "react-router-dom";
import logo from "../images/blue_logo 1.png";
function Navbar(props)
{
    return(
        <>
         <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item me-5">
        <Link to={"/"+props.home} class="navigation nav-link">{props.hometitle}</Link>
        </li>
        <li class="nav-item me-5">
        <Link to={"/"+props.about} class="navigation nav-link">{props.abouttitle}</Link>
        
        </li>
        <li class="nav-item me-5">
        <Link to={"/"+props.signin}  class="navigation nav-link">{props.signintitle}</Link>
       
        </li>
     
      </ul>
      
    </div>
  </div>
  </nav>

        </>
        
       
    

    )
}
export default Navbar;