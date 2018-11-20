import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages/homepage'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <div className="pageContainer">
          <Navbar />
          <div className="content">
            <HomePage />
          </div>
          <Footer />

      </div>
    );
  }
}

