import {Link} from "react-router-dom";
import logo from "../images/blue_logo 1.png";

function Navbar()
{
    return(
        <>
         <nav class="navbar navbar-expand-lg " id="home">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class=" navbar-brand logo" href="#"><img src={logo}></img></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/" class="navigation nav-link me-5">Home</Link>
        
        </li>
        <li class="nav-item">
        <Link to="/about" class="navigation nav-link me-5">About</Link>
        
        </li>
        <li class="nav-item">
        <Link to="/login" class="navigation nav-link me-5">Login</Link>
       
        </li>
       
      </ul>
      
    </div>
  </div>
  </nav>

        </>
        
       
    

    )
}
export default Navbar;