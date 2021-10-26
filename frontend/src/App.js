import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";

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
          <Route exact path="/accounts" component={ListAccount} />
          <Route path="/accounts/create" component={CreateAccount} />
          <Route path="/accounts/view/:id" component={DetailAccount} />
          <Route path="/accounts/edit/:id" component={EditAccount} />
          <Route path="/accounts/delete/:id" component={DeleteAccount} />

          <Route exact path="/contacts" component={ListContact} />
          <Route path="/contacts/create" component={CreateContact} />
          <Route path="/contacts/view/:id" component={DetailContact} />
          <Route path="/contacts/edit/:id" component={EditContact} />
          <Route path="/contacts/delete/:id" component={DeleteContact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
