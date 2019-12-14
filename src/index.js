import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root';
import Home from './components/Home';
import './index.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductDetails from "./components/ProductDetails";

ReactDOM.render(
  <Root>
    <Router>
      <Switch>
        <Route path={`/`} exact component={Home}/>
        <Route exact path="/product/:handle" component={App}/>
        <Route exact path="/product/" component={App}/>
        <Route exact path="/product/details/:handle" component={ProductDetails}/>
      </Switch>
    </Router>
  </Root>,
  document.getElementById('root')
);
