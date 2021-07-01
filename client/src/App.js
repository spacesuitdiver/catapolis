import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Cats from "./pages/Cats";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Container>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/cats" component={Cats} />
            <Route component={() => <h1>Not Found!!!</h1>} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
