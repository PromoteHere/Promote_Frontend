"use client";
import React, { useEffect, useState } from 'react';
import './LoginForm.css';
import { ADDRESS_REGEX, EMAIL_REGEX, PASSWORD_REGEX, PHONENUMBER_REGEX, USERNAME_REGEX, VALIDATION_MESSAGE } from '@/Services/Regex';

const SignInSignUpForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [onErrorUserName, setOnErrorUserName] = useState(false);
  const [onErrorEmail, setOnErrorEmail] = useState(false);
  const [onErrorPhone, setOnErrorPhone] = useState(false);
  const [onErrorAddress, setOnErrorAddress] = useState(false);
  const [onErrorPassword, setOnErrorPassword] = useState(false);
  const [onErrorConfirmPassword, setOnErrorConfirmPassword] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const toggleSignUpMode = () => {
    setIsSignUp(!isSignUp);
  };

  const onUserName = (e: any) => {
    setUsername(e.target.value)
    if (USERNAME_REGEX.test(username)){
      setOnErrorUserName(false);
    }
    else{
      setOnErrorUserName(true);
    }
  }

  const onEmail = (e: any) => {
    setEmail(e.target.value)
    if(EMAIL_REGEX.test(email)){
      setOnErrorEmail(false);
    }
    else{
      setOnErrorEmail(true);
    }
  }

  const onPhoneNumber = (e: any) => {
    setPhone(e.target.value)
    if(PHONENUMBER_REGEX.test(phone)){
      setOnErrorPhone(false);
    }
    else{
      setOnErrorPhone(true);
    }
  }

  const onAddress = (e: any) => {
    setAddress(e.target.value)
    if(ADDRESS_REGEX.test(address)){
      setOnErrorAddress(false);
    }
    else{
      setOnErrorAddress(true);
    }
  }

  const onPassword = (e: any) => {
    setPassword(e.target.value)
    if(PASSWORD_REGEX.test(password)){
      setOnErrorPassword(false);
    }
    else{
      setOnErrorPassword(true);
    }
  }

  const onConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  }

  useEffect(() => {
    if(confirmPassword.length > 0){
      if(confirmPassword === password){
        setOnErrorConfirmPassword(false);
      }
      else{
        setOnErrorConfirmPassword(true);
      }
    }
    if((username === '') && (email === '') && (phone === '') && (address === '') && (password === '') && (confirmPassword === '')){
      setDisabledButton(true);
    }
    else{
      setDisabledButton(false);
    }
  },[])

  // useEffect(() => {
  //   if((username == '') && (email == '') && (phone == '') && (address == '') && (password == '') && (confirmPassword == '')){
  //     setDisabledButton(true);
  //   }
  //   else{
  //     setDisabledButton(false);
  //   }
  // },[(username && email && phone && address && password && confirmPassword)])


  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={username} onChange={(e) => onUserName(e)}/>
            </div>
            {onErrorUserName &&<span style={{display: "flex", color: "red"}}><h4> {VALIDATION_MESSAGE.username} </h4></span> }
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={email} onChange={(e) => onEmail(e)} />
            </div>
            {onErrorEmail &&<span style={{display: "flex", color: "red"}}><h4> {VALIDATION_MESSAGE.email} </h4></span> }
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="number" placeholder="Phone Number" value={phone} onChange={(e) => onPhoneNumber(e)} />
            </div>
            {onErrorPhone &&<span style={{display: "flex", color: "red"}}><h4> {VALIDATION_MESSAGE.phone} </h4></span> }
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Address" value={address} onChange={(e) => onAddress(e)}/>
            </div>
            {onErrorAddress &&<span style={{display: "flex", color: "red"}}><h4> {VALIDATION_MESSAGE.address} </h4></span> }
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => onPassword(e)}/>
            </div>
            {onErrorPassword &&<span style={{display: "flex", color: "red"}}><h4> {VALIDATION_MESSAGE.password} </h4></span> }
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => onConfirmPassword(e)}/>
            </div>
            {onErrorConfirmPassword && <span style={{display: "flex", color: "red"}}><h4> {VALIDATION_MESSAGE.confirmPassword} </h4></span> }
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New to our community ?</h3>
            <p>
              Discover a world of possibilities! Join us and explore a vibrant
              community where ideas flourish and connections thrive.
            </p>
            <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign up
            </button>
          </div>
          <img
            src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches our
              shared experiences. Let's continue this journey together!
            </p>
            <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign in
            </button>
          </div>
          <img
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpForm;

// "use client";
// import React from "react";
// import "./LoginForm.css"; // Assuming you have your CSS in a file named styles.css
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faUserSecret } from "@fortawesome/free-solid-svg-icons";

// const LoginForm = () => {
//   return (
//     <section className="login-container">
//       <article className="form-container">
//         <div className="intro">
//           <h1>Welcome Back</h1>
//           <p>Welcome Back, Please Enter Your details</p>
//         </div>

//         <form className="form">
//           <div className="email-input">
//             <FontAwesomeIcon icon={faEnvelope} className="icon-size" />
//             <span id="seperator"></span>
//             <div className="input-container">
//               <p className="sub-title">Email Address</p>
//               <input type="email" name="usermail" id="email" />
//             </div>
//           </div>

//           <div className="email-input">
//           <FontAwesomeIcon icon={faUserSecret} className="icon-size" />
//             <span id="seperator"></span>
//             <div className="input-container">
//               <p className="sub-title">Password</p>
//               <input type="password" name="userpass" id="password" />
//             </div>
//           </div>

//           <button id="submit">Continue</button>
//         </form>

//         <article className="outro">
//           <div className="ending">
//             <p>Or Continue With</p>
//           </div>

//           <div className="socials">
//             <a className="social-btn" href="" id="g-btn">
//               <p>Google</p>
//             </a>
//             <a className="social-btn" href="" id="a-btn">
//               <p>Apple</p>
//             </a>
//             <a className="social-btn" href="" id="fb-btn">
//               <p>Facebook</p>
//             </a>
//           </div>
//         </article>
//       </article>
//     </section>
//   );
// };

// export default LoginForm;

