import React, { useState } from "react"
import GoogleLogin from "react-google-login"
import pic1 from "../images/BlueVector1.png"
import pic2 from "../images/BlueVector2.png"


export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

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
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="login-button d-grid gap-2 mt-3 mb-3">
              <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">
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

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="google-login">
              <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="SIGN UP WITH GOOGLE"
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
              className="form-control mt-1"
              placeholder="e.g Tanisha Kindo"
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g tanishakindo"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Create Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="login-button d-grid gap-2 mt-3 mb-3">
              <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">
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
      <div className="vector1">
        <img src={pic1}/>
      </div>
      <div className="vector2">
        <img src={pic2}/>
      </div>
    </div>
  )
}

