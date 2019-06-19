import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Tasks from './components/Tasks';
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Tasks} />
          <Route exact path="/profile" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
