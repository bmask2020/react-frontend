import React,{ useState } from "react";
import axios from "axios";


function Register() {

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image,setImage] = useState(0);
   

    function handleImage(e) {

      
      console.log(image)


    }

    handleImage();

   const formRegister = (e) => {

        e.preventDefault();
        // console.log(this.state.image)
        const data = new FormData();

        data.append('name',name);
        data.append('email', email);
        data.append('password', password);
        data.append('image', image);
            
        axios.post('/register', data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
      
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    }

  

        return (

            <div className="container" style={{marginTop:'7rem'}}>
            <div className="row">
              <h4>Register Form</h4>
              <br/>
              <br/>
              <br/>
            <form className="col-lg-9 m-auto" onSubmit={formRegister} style={{textAlign:'left'}} enctype="multipart/form-data">

                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" value={name} id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" value={password} id="exampleInputPassword1" required onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="mb-3">
                <label for="formFile" className="form-label">Image</label>
                <input className="form-control" name="image" id="file" type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
            
        </div>
        )
  
}

export default Register