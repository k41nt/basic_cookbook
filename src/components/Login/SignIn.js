import React, { useState } from "react";
import "../Login/SignIn.css";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory } from "react-router-dom";

function SignIn() {
  //use History is use  once the login is successful to redirect to
  // another route
  const history = useHistory();

  //create a useState to save the user input for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //create a function to handle onClick event
  const loginUser = async (e) => {
    //to prevent by default refresh of the page
    e.preventDefault();
    //using fetch to pass the data onto the specific route
    //i.e login
    //return a promise therefore use await
    const res = await fetch("api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalide Credentials");
    } else {
      window.alert("Login Successful");
      history.push("/api/user/register");
    }
  };
  return (
    <div className="login-box">
      <PersonIcon className="person" />
      <h1>SignIn</h1>
      <form method="POST">
        <p>Email</p>
        <input
          type="email"
          id="input_submit"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <p>Password</p>
        <input
          type="password"
          id="input_submit"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <input type="submit" name="" value="Login" onClick={loginUser} />
      </form>
    </div>
  );
}

export default SignIn;
