import React, { useState } from "react";
import { AppContext } from "./AppContext.js";
//import Home from './components/Home'
//import SignIn from './components/SignIn'
// import Register from './components/Register'
// import AboutUs from './components/AboutUs'
import Home from "./components/MainPage/Sections/Home/Home.js";
import Menu from "./components/MainPage/Sections/Menu/Menu.js";
import Register from "./components/MainPage/Sections/Register/Register.js";
import Pantry from "./components/Pantry/Pantry.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/MainPage/Sections/Signin/Signin.js";
import MainPage from "./components/MainPage/MainPage.js";
import PrivateRoute from "./components/PrivateRoute.js";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AppContext.Provider value={[authenticated, setAuthenticated]}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/#home" exact component={Home} />
          <Route path="/#menu" exact component={Menu} />
          <Route path="/#register" exact component={Register} />
          <Route path="/#signin" exact component={Signin} />
          <PrivateRoute
            authCheck={authenticated}
            path="/pantry"
            exact
            component={Pantry}
          />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
