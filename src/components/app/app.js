import React from 'react';
import './app.scss';
import Navbar from '../navbar';
import Home from '../../pages/home';
import Cart from '../../pages/cart';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
          <Router>
          <Navbar />
              <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route path="/cart">
                    <Cart/>
                  </Route>
                </Switch>
            </Router>          
        </div>
    )
}

export default  App;