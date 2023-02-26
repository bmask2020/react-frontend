import { Outlet } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function AdminInterface() {

  

  const [user, setUser] = useState('');
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [image,setImage] = useState('');
  const [loggedOut, setLoggedOut] = useState('');

  useEffect(() => {
      // Update the document title using the browser API
      axios.get('user',user)
      .then((response) => {
        // console.log(response);
        // getUser(response.user);
        // console.log(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setImage(response.data.image);

        

        
      })
      .catch((error) => {
        console.log(error);
      });
    });

  const getUser = (user) => {

      setUser(user);

    }
    

    const logout = () => {

      localStorage.clear();
      this.props.setUser(null);

    }

    const img = 'http://127.0.0.1:8000/uploads/' + image;

    let button;

    if(localStorage.getItem('token')) {

      button = (

        <div>
        <li><Link class="dropdown-item" to="/admin">Profile</Link></li>
        <li><Link class="dropdown-item" to="/login" onClick={logout}>Logout</Link></li>
        </div>

      )
      
      
      }else {

        <div>
        <li><Link class="dropdown-item" to="/login">Login</Link></li>
        <li><Link class="dropdown-item" to="/register">Register</Link></li>
        </div>

      }
    
      if(!localStorage.getItem('token')) {

        return (

          <Navigate to={'/login'} />
        )

      
      }

   

    return (
        <div>
      
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
              <Link to="/admin">Navbar</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
                  <li class="nav-item">
                    <Link to="/admin" className="nav-link">Dashboard</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={img} alt="" style={{width:'50px', height:'50px'}} className="rounded-circle" />
                    </a>
                    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><a class="dropdown-item"> Welcome {name} </a></li>
                      {button}
    
                    </ul>
                  </li>
                
                </ul>

              </div>
              </div>
              </nav>
    
        </div>
     
        <img src="http://lorempixel.com/75/50/abstract/" alt=""/>
                <Outlet />
           
        </div>
    )
}