
import React,{ useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { Navigate } from "react-router-dom";

export default function Dashboard() {

  

    const [user,setUser] = useState('');
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image,setImage] = useState('');
    const [id,setId] = useState('');

    useEffect(() => {
      // Update the document title using the browser API
      axios.get('user',user)
      .then((response) => {
    
       
        setId(response.data.id);

        
      })
      .catch((error) => {
        console.log(error);
      });
    });


    const profileUpdate = (e) => {

      e.preventDefault();
      console.log('good');

      const data = new FormData();

      data.append('name',name);
      data.append('email', email);
      data.append('password', password);
      data.append('image', image);
      data.append('id', id);
          
      axios.post('profile/update', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      })
    
      .then((response) => {
        // console.log(response);
        if(response) {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Profile Updated Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });

    }
    
    if(!localStorage.getItem('token')) {

      return (

        <Navigate to={'/login'} />

      )

      
    }
    
    return (

        <div>
            <form onSubmit={profileUpdate} className="col-lg-9 m-auto" style={{textAlign:'left'}}>
              <br/><br/>
          <h4 className="text-center">Profile Update</h4>
            <br/>
            <input type={"hidden"} name="id" value={id} />
            <div class="mb-3">
              
  <label for="exampleInputEmail1" class="form-label">Name</label>
  <input type="text" name="name" value={name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => setName(e.target.value)} />
</div>

<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" name="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => setEmail(e.target.value)} />
</div>

<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" name="password" value={password} class="form-control" id="exampleInputPassword1" required onChange={(e) => setPassword(e.target.value)} />
</div>

<div className="mb-3">
                <label for="formFile" className="form-label">Image</label>
                <input className="form-control" name="image" id="file" type="file" onChange={(e) => setImage(e.target.files[0])}/>
                </div>

<button type="submit" class="btn btn-primary">Login</button>
</form>
        </div>
    )
}