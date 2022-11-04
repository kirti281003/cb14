import {Link} from "react-router-dom";
import logo from "../images/blue_logo 1.png";
function Navbar()
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
        <Link to="/" class="navigation nav-link">Home</Link>
        </li>
        <li class="nav-item me-5">
        <Link to="/about" class="navigation nav-link">About</Link>
        
        </li>
        <li class="nav-item me-5">
        <Link to="/login" class="navigation nav-link">Login/Sign Up</Link>
       
        </li>
     
      </ul>
      
    </div>
  </div>
  </nav>

        </>
        
       
    

    )
}
export default Navbar;