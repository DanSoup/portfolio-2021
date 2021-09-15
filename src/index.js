import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, BrowserRouter} from 'react-router-dom';
import './normalize.css';
import './index.scss';

import MainPage from './components/MainPage/MainPage.js'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
  render () {
    return <Router history={history}>
      <MainPage/>
    </Router>
  };
}

ReactDOM.render(<App/>, document.getElementById('app'));