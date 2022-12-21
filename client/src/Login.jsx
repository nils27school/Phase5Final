import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [errors, setErrors] = useState("")

    
     
    //   useEffect(() => {
    //     fetch("/login").then((response) => {
    //       if (response.ok) {
    //         response.json().then((user) => setUser(user));
    //       }
    //     });
    //   }, []);
    
    
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(email);
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          })
            .then(r => {
                if (r.ok) {
                    r.json()
                    .then (data => window.sessionStorage.setItem("user_id", data.id))
                    .then (() => navigate("/recipes"))
                }
                else{
                    setErrors("invalid email or password")
                }
            })
        }            

   

     
     return (
        <div className='auth-form-container'>
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value ={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="************" id="password" name="password" />
                <button 
                type="submit">
                Log In
                </button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    );
    
}

    export default Login;