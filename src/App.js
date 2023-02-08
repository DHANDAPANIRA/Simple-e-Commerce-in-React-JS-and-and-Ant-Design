import React from "react";
import ReactDOM from "react-dom";

import logo from './logo.svg';
import './App.css';

import "./styles.css";
import {Home} from './components/Home';
import {Employee} from './components/Employee';
import {Department} from './components/Department';
//import Button from 'react-bootstrap/Button'
import {BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom';
import {Navigation} from "./components/Naviagtion";
import {Container} from "react-bootstrap";
//Router instead of Switch 
//import Login from './screens/Login';
import AppHeader from './components/Header/header.js'
import AppFooter from './components/Footer/footer.js'
import PageContent from './components/PageContent/index.js'

import { } from 'antd';

function App(){
  return <div className="APP">
      <BrowserRouter>
        <AppHeader />
          <PageContent />
        <AppFooter />
    </BrowserRouter>
    </div>;
}



/* function App(){ 

// React States
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

// User Login info
const database = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};

const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0];

  // Find user login info
  const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
    // Username not found
    setErrorMessages({ name: "uname", message: errors.uname });
  }
};

// Generate JSX code for error message
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

// JSX code for login form
const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
      <Button variant="primary" >Boostrap Button</Button>
    </form>
  </div>
);

return (
  <div className="APP">
    <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  </div>
);
*/

/* return (

  <Container>
    <div className="App">
      <h3 className="m-3 d-flex justify-content-center">
        React js with Web API demo
      </h3>
      <h3 className="m-3 d-flex justify-content-center">
        Employee Management Portal
      </h3>
      <Navigation />
          <Routes path="/" component ={<Home />} />
          <Routes path="/department" component ={Department} />
          <Routes path="/employee" component ={Employee} />
          <Routes path="*" component ={<div>page not found</div>} />
        
     </div>
    </Container>

   );
   
} */

export default App;
