import { Outlet } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

export default function VistorInterface() {

    return (

        <div>
            <div>
            <nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
<Link to="/">Navbar</Link>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <Link to="/login" className="nav-link">Login</Link>
    </li>
    <li class="nav-item">
     <Link to="/register" className="nav-link">Register</Link>
    </li>
  
  </ul>

</div>
</div>
</nav>
            </div>
                <Outlet />
           
        </div>
    )
}