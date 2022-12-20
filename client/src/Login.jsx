import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

     
    //   useEffect(() => {
    //     fetch("/login").then((response) => {
    //       if (response.ok) {
    //         response.json().then((user) => setUser(user));
    //       }
    //     });
    //   }, []);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
          })
            .then((r) => {
                if (r.ok){
                    r.json().then((user) => {
                        console.log(user);
                       console.log(sessionStorage.getItem("user_id", user.id))});
                }
                else {
                    r.json().then(console.log)
                }
            });
            }
            

   

    return (
        <div className='auth-form-container'>
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value ={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
    }