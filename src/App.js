import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';

import Employees from './components/Employees';
import Header from './components/Header';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Employees />
        </Route>
        <Route exact path='/add'>
          <CreateEmployee />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
