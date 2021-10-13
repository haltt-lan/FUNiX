import React, { Component } from 'react';
import Main from './component/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>

    )
  }
}