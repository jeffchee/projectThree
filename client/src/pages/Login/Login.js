import React from "react";
import "./Login.css";

const Login = () => {
    return(
<div class="container">
<br/>
<br/><br/>
<h1 align="center"> MANAGE YOUR VIRTUAL PIGGY</h1>
        <div id="login-row" class="row justify-content-center align-items-center">
            <div id="login-column" class="col-md-6">
                <div class="box">
                
                    <div class="shape1"></div>
                    <div class="shape2"></div>
                    <div class="shape3"></div>
                    <div class="shape4"></div>
                    <div class="shape5"></div>
                    <div class="shape6"></div>
                    <div class="shape7"></div>
                    <div class="float">
                        <form class="form" action="">
                            <div class="form-group">
                                <label for="username" class="text-white">Username:</label><br/>
                                <input type="text" name="username" id="username" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-white">Password:</label><br/>
                                <input type="text" name="password" id="password" class="form-control" />
                            </div>
                            <div class="form-group"> 
                            <h1 align="center"><a  href="http://localhost:3000/pages/Overview" className="btn btn-primary" >Submit</a></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    };

export default Login;