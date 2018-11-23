import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages/homepage'
import './App.css'
import Content from './pages/contentpage';
import SignLogin from './pages/sign-login';


export default class App extends Component {
  render() {
    return (
      <div className="pageContainer">
          <Navbar />
          <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup-login" exact component={SignLogin} />
            <Route path='/:restuarent' exact component={Content} />
          </Switch>
          </div>
          <Footer />

      </div>
    );
  }
}

