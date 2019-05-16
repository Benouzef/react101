import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
    </Switch>
  );
}

export default App;
