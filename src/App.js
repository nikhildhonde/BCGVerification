import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./components/homepage/homepage";
import  Login from "./components/login/login";
import Register from "./components/register/register";
// import Home from './components/Home';
// import UserLogin from './components/UserLogin';
// import UserProfile from './components/UserProfile'; //comment

function App() {
  return (
    <div>
        <Router>
          <div className="container">
            <h1>Hello</h1>
              <Routes> 
                    <Route path = "/" element = {<Register/>}></Route>   
                    <Route path = "/login" element = {<Login/>}></Route>
                    <Route path = "/Homepage" exact element = {<Homepage/>}></Route>
              </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
