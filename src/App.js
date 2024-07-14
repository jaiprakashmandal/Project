import React from "react";
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
    <p className="title">Registration Form</p>

            <form className="App">
              <p>Name</p>
                <input type="text" placeholder="Enter your Name" />
                <p>Email ID</p>
                <input type="email" placeholder="Enter your Email-ID"/>
                <p>Password</p>
                <input type="password" placeholder="Enter your password" />
                <input type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
            </>
  );
}


export default App;
