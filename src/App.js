import React, { useContext, useEffect, useState } from "react";
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import './assets/css/css-reset.css';
import './assets/scss/desktop-style.css';
import './assets/scss/tablet-style.css';
import './assets/scss/mobileLandscape-style.css';
import './assets/scss/mobile-style.css';

import { UserContext, UserProvider } from "./page/userContext";
import Home from "./page/Home";
import CreateListing from "./page/CreateListing";

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create-listing" exact>
              <CreateListing />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserProvider >
  );
}

export default App;
