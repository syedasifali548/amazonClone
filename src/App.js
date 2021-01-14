import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const promise = loadStripe
('pk_test_51I5bysCDMSg6mIGeYmFW8jbOopQ1DO7kIbvEqWAIiCt7L2kDbAjhY0NVI7iwuR02WS6CsiSTaO2diqrJ9ReFQUQA00la9VeJwW'
)
function App() {

  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // This code will run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      // console.log("Iam user" ,authUser);
      if (authUser) {
        // When user just Logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // when user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">

            <Header />
            <Elements stripe={promise}>
            <Payment />

            </Elements>
           
            
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
