import React, { useState } from 'react';

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        fetch("/login", {
            method: "CREATE",
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
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="name">Full Name</label>
            <input value={name} name="name" id="name" placeholder="Full Name"/> */}
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value ={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="register-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register;