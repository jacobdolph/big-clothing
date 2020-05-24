import React from 'react';
import './App.css';
import Homepage from './homepage.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const HatsPage = () => (
    <div>
      <h1>
        HATS PAGE
      </h1>
    </div>
  )

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
