import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInUp from './pages/SignInUp';
import { auth } from './firebase/firebase.utils';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInUp} />
        </Switch>
      </div >
    );
  }
}

export default App;
