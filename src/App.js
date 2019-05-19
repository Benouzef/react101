import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
