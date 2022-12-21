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
        <h1>This is my about component!</h1>
      </div>
    );
  }

  export default About;