import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css';

export default class Navbar extends Component {

    render(){
        return(
            <div className="nav-container">
               <div className="left">
                <Link to={"/"}><img alt="logo" src={require('../images/cloche-icon-white.png')}/></Link>
               </div>
               <div className="right">
               <Link to={"/signup-login"}style={{ textDecoration: 'none' ,color:'white'}}>Signup / Login</Link>
               </div>
            </div>
        );
    }
}