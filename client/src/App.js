import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Card from './component/Card';
import RegisterPage3 from './component/RegisterPage3';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={RegisterPage3} />
      <Route exact path='/chat/:name' component={Card} />

    </Switch>
  );
}

export default App;
