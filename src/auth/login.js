import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Login extends Component {

  state = {

    email:'',
    password:''

  }

  formSubmit = (e) => {

        e.preventDefault();
       
        const data = {

          email:this.state.email,
          password:this.state.password
          
        }
    
        axios.post('login', data)
          .then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            this.setState({
              loggedIn:true
            });
            
          })
          .catch((error) => {
            console.log(error);
          });

    }

       render() {

        if(this.state.loggedIn) {

          return (

            <Navigate to={'/admin'} />

          )
         

        }
        
        return (

          <div className="container" style={{marginTop:'7rem'}}>
              <div className="row">
                <h4>Login Form</h4>
                <br/>
                <br/>
                <br/>
              <form className="col-lg-9 m-auto" onSubmit={this.formSubmit} style={{textAlign:'left'}}>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => {this.setState({email:e.target.value})}}/>
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" name="password" class="form-control" id="exampleInputPassword1" required onChange={(e) => {this.setState({password:e.target.value})}}/>
                </div>

                <button type="submit" class="btn btn-primary">Login</button>
              </form>
              </div>
              
          </div>
      )

       }
       
  
}

export default Login