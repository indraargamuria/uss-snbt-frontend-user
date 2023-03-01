import { faLock, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import './Login.css';

class Login extends Component {
    render(){
        return <Fragment>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-logo">
                        <img src="http://uss-utbk.com/img/logoussnewnotext.f25b4541.png" alt="" />
                    
                    </div>
                    <div className="login-headline">Masuk USS SNBT</div>
                    <div className="login-socialmediaboxwrapper">
                        <div className="login-socialmediawrapper">
                            <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                            
                        </div>
                    </div>
                    <div className="login-form">
                        <form action="/">
                            <div className="login-inputboxwrapper">
                                <div className="login-inputicon">
                                    <i><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></i>
                                </div>
                                <div className="login-inputwrapper">
                                    <span className="label">Email Address</span>
                                    <span><input type="text" name="emailaddress" id="emailaddress" /></span>
                                </div>
                            </div>
                            <div className="login-inputboxwrapper">
                                <div className="login-inputicon">
                                    <i><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></i>
                                </div>
                                <div className="login-inputwrapper">
                                    <span className="label">Password</span>
                                    <span><input type="password" name="password" id="password" /></span>
                                </div>
                            </div>
                            <div className="login-optionwrapper">
                                <span>
                                    {/* <label>
                                        <input type="checkbox" name="remember" 
                                        id="remember" />
                                        Remember Me
                                    </label> */}
                                </span>
                                <span>
                                    Forgot Password
                                </span>
                            </div>
                            <div className="login-signinbuttonwrapper">
                                <button type="submit">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default Login;