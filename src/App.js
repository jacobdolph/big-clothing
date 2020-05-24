import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInUp from './pages/SignInUp';


function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
