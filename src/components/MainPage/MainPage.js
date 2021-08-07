import React from "react";

import Navbar from "./NavbarMain/Navbar.js"
import Home from "./Sections/Home/Home.js";
import Menu from "./Sections/Menu/Menu.js";
import Register from "./Sections/Register/Register.js";
import Signin from "./Sections/Signin/Signin.js";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Menu />
      <Register />
      <Signin />
    </div>
  );
};

export default MainPage;
