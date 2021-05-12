import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Donate from "./components/donate"
import {Route, Link, BrowserRouter as Router} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Buy from "./components/buy"
import Sell from "./components/sell" 
import "./components/style.css"
import Volunteer from "./components/volunteer"

const routing = (
  <Router>
  <div className="header-right">
  
  <Link to='/'> Home</Link>
  <Link to='/donate'> Donate</Link>
  <Link to='/buy'> Buy</Link>
  <Link to='/sell'> Sell</Link>
  <Link to='/Volunteer'> Volunteer</Link>
  </div>
  <switch>
  <Route exact path="/" component={App} />
  <Route path="/donate" component={Donate} />
  <Route path="/buy" component={Buy} />
  <Route path="/sell" component={Sell} />
  <Route path="/volunteer" component={Volunteer} />
  </switch>
  </Router>
)

ReactDOM.render(routing,
   document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();