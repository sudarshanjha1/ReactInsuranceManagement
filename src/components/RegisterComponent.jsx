import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const RegisterComponent = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const[username,setUsername]=useState('');
  const navigate = useNavigate();

  const saveUser = (e) => {
    if (email==='' || username==='' || password==='') {
        alert("please fill out all filed");
        return;
        
    }
    e.preventDefault();
    axios.post("http://localhost:8081/save",{
        email:email,
        username:username,
        password:password});
        alert("user saved succesfullty");
        navigate("/login"); 
     
  };
  const loginUser = (e) => {
    e.preventDefault();
   
          
                navigate("/login")
          
        
     
  };
  return (
    <div>
    <div class="container mt-4" >
    <div class="card">
        <h1>User Form</h1>
        <form>

        <div class="form-group">
          <label>Username </label>
          <input type="text"  class="form-control" id="username" placeholder="Enter Name"
          
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>email </label>
          <input type="text"  class="form-control" id="email" placeholder="Enter EMAIL"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>Password </label>
          <input type="text"  class="form-control" id="password" placeholder="Enter Password"
          
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={saveUser}>save user</button>
        <button type="submit" class="btn btn-primary" onClick={loginUser}>Logon</button>
        </form>
       

    </div>
    </div>
    </div>
  )
}

export default RegisterComponent
