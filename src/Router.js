import React from 'react';
import{Switch,Route}from"react-router-dom"
import Home from "./pages/home";
import jsonPage from"./pages/jsonPage"
const Main = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Mainpage" component={jsonPage} />
    </Switch>
  );

  export default Main