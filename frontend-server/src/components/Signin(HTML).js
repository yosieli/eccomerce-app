import React from 'react'
import './Signin.css'


export default class Signin extends React.Component{

  state = {

  }


  render(){
  return (
    <div className="login-page">
    <video autoPlay  muted loop id="video-background" >
      {/* <source src="https://www.videvo.net/videvo_files/converted/2016_10/preview/160812_061_Iphone9_4K.mp496821.webm" type="video/mp4"/> */}
      <source src="stock.mp4" type="video/mp4"/>
    </video>
    <h1>Welcome to Marketplace!</h1>
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
        <h2> The #1  </h2>
      </div>
  );
};
}



