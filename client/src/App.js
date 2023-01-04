import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Recipes from "./Recipes";
import Comments from "./Comments";
import Register from './Register';
import Logout from "./Logout";
import Header from './Header';



function App() {
  
  return (
    <div>
      <Header />
      <>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/recipes" element={<Recipes/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/comments" element={<Comments/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        {/* <Route exact path="/addrecipe" element={<AddRecipe/>}/> */}
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      </>
    </div>
    
  );
}


export default App;
