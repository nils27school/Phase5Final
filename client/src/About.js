import React from 'react';
// import { Redirect } from "react-router-dom"
import {useNavigate} from "react-router-dom";

function About() {
    const navigate = useNavigate();

    // if (!authorized) {
    //     navigate("/") ;
    // }
    return (
      <div>
        <h1>Welcome to EZmeals</h1>
        <h2>EZmeals is a cookbook full of easy to make recipes</h2>
        <h2>Log in or Sign up with your email</h2>
        <h2>Add your own recipes</h2>
        <h2>Add/delete your own comments</h2>
        <h2>Enjoy!</h2>
        <h2>-Chef Nils</h2>
      </div>
    );
  }

  export default About;