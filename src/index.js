import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './normalize.css';
import './index.scss';

import MainPage from './components/MainPage/MainPage.js'

class App extends Component {
  render () {
    return <BrowserRouter basename={'/apps/portfolio-2021'}>
      <MainPage/>
    </BrowserRouter>
  };
}

ReactDOM.render(<App/>, document.getElementById('app'));