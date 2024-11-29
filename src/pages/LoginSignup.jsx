import React from "react";
import "./css/login.css";
function LoginSignup() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sing Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your Email " />
          <input type="password" name="" id="" placeholder="password" />
        </div>
        <button>continue</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>by continuing , i agree to the terms of use & privaccy policy.</p>
        </div>
      </div>
      
    </div>
  );
}

export default LoginSignup;
