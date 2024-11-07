import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Optional for navigation

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div className="loginmain" style={{backgroundColor:'#18181b',height:'100vh',width:'100vw',color:"white"}}>
        <div className="container pt-5" >
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h3 className="text-center mb-4">Login</h3>
                    <form >
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                className="form-control w-100" 
                                id="username" 
                                placeholder="Enter username"
                                //value={username}
                    
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control w-100" 
                                id="password" 
                                placeholder="Enter password"
                                //value={password}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className="text-center mt-3">
                        <small>
                            Don't have an account? <Link to="/Register">Register</Link>
                        </small>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
