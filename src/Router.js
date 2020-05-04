import React from 'react';
import{Switch,Route}from"react-router-dom"
import Home from "./pages/home";
import Mainpage from"./pages/pagetwo"
const Main = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Mainpage" component={Mainpage} />
    </Switch>
  );

  export default Main