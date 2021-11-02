import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "../src/utils/PrivateRoute";

import { Header } from "./components/layout/Header";

import { Homepage } from "./components/homepage/Homepage";
import { Login } from "./components/homepage/Login";

import { ListAccount } from "./components/account/ListAccount";
import { CreateAccount } from "./components/account/CreateAccount";
import { DetailAccount } from "./components/account/DetailAccount";
import { EditAccount } from "./components/account/EditAccount";
import { DeleteAccount } from "./components/account/DeleteAccount";

import { ListContact } from "./components/contact/ListContact";
import { CreateContact } from "./components/contact/CreateContact";
import { DetailContact } from "./components/contact/DetailContact";
import { EditContact } from "./components/contact/EditContact";
import { DeleteContact } from "./components/contact/DeleteContact";

import { Footer } from "./components/layout/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/accounts" component={ListAccount} />
          <Route path="/accounts/create" component={CreateAccount} />
          <Route path="/accounts/view/:id" component={DetailAccount} />
          <Route path="/accounts/edit/:id" component={EditAccount} />
          <Route path="/accounts/delete/:id" component={DeleteAccount} />

          <PrivateRoute exact path="/contacts" component={ListContact} />
          <PrivateRoute path="/contacts/create" component={CreateContact} />
          <PrivateRoute path="/contacts/view/:id" component={DetailContact} />
          <PrivateRoute path="/contacts/edit/:id" component={EditContact} />
          <PrivateRoute path="/contacts/delete/:id" component={DeleteContact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
