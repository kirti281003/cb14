import React, { useState ,useEffect} from "react"

import GoogleLogin from "react-google-login"
import pic1 from "../images/BlueVector1.png"
import pic2 from "../images/BlueVector2.png"
import Axios from "axios";


export default function (props) {

  let [authMode, setAuthMode] = useState("signin");
  const[user,setUser]=useState({
    name:"",username:"",email:"",password:""
  });
  let name,value;
  const handleinput=(e)=>{
    e.preventDefault();
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
    console.log(e);
  }
  const postData=async(e)=>{
    e.preventDefault();
    const{name,username,email,password}=user;
   const res=await fetch("/signup",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name,username:username,email:email,password:password
    })

   });
   const response=await res.json();
   if(res.status===422 )
   {
    window.alert("Inavlid");
    console.log("Invalid");
   }
   else{
    window.alert("Success");
    console.log("Success");
    


   }

  }
  const[loginuser,setlogin]=useState(
    {
      email:"",password:""
    }
  );
  let loginName,loginValue;
  const handleLogin=(e)=>
  {e.preventDefault();
    loginName=e.target.name;
    loginValue=e.target.value;
    setlogin({...loginuser,[loginName]:loginValue})
    console.log(e);

  }
  const postLogin=async(e)=>{
    e.preventDefault();
    const{email,password}=loginuser;
   const res=await fetch("/signin",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email:email,password:password
    })

   });
    const response=await res.json();
    console.log(response.id);
    const id=response.id;
    const token=response.token;
    console.log(res.status);
    console.log(response);
   if(res.status===422)
   {
    window.alert("Inavlid");
    console.log("Invalid");
   }
   else{
    console.log("Success");
    console.log(id);
    window.alert("Success");
 
    window.location.href="/user/"+id+"/"+token;

   }

  }
 

 const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="google-login">
              <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="SIGN IN WITH GOOGLE"
              /*onSuccess={handleLogin}
              onFailure={handleFailure}*/
             >
              </GoogleLogin>
            </div>
            <div className="text">
              Or sign in with email ———————
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
                value={loginuser.email}
                onChange={handleLogin}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                value={loginuser.password}
                onChange={handleLogin}
              />
            </div>
            <div className="login-button d-grid gap-2 mt-3 mb-3">
              <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true" onClick={postLogin}>
                LOGIN
                </button>
            </div>
            <p className="text-center">Create new account?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
              </p>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }


  return (<>
    <div className="Auth-form-container">
      <form className="Auth-form" method="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="google-login">
              <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="SIGN IN WITH GOOGLE"
              /*onSuccess={handleLogin}
              onFailure={handleFailure}*/
             >
              </GoogleLogin>
            </div>
          
            <div className="text">
              Or sign up with email ———————
            </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              id="name"
              className="form-control mt-1"
              placeholder="e.g Tanisha Kindo"
              name="name"
              autoComplete="off"
              value={user.name}
              onChange={handleinput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              id="username"
              className="form-control mt-1"
              placeholder="e.g Tanisha Kindo"
              name="username"
              autoComplete="off"
              value={user.username}
              onChange={handleinput}
            />
          </div>
        
          <div className="form-group mt-3">
            <label>Email ID</label>
            <input
              type="email"
              id="email"
              className="form-control mt-1"
              placeholder="Email Address"
              name="email"
              value={user.email}
              onChange={handleinput}
            />
          </div>
          <div className="form-group mt-3">
            <label>Create Password</label>
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleinput}
            />
          </div>
          <div className="login-button d-grid gap-2 mt-3 mb-3">
              <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true" onClick={postData}>
                SIGN UP
                </button>
            </div>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Login
            </span>
          </div>
        </div>
      </form>
     
    </div>
    
      </>
  )
}


