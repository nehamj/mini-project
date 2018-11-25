import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css';

export default class Navbar extends Component {
    
    constructor(){
        super()
        this.state={user:{username:"annonymous",uid:0}}
    }
    render(){
        return(
            <div className="nav-container">
               <div className="left">
                <Link to={"/"}><img alt="logo" src={require('../images/cloche-icon-white.png')}/></Link>
               </div>
               <div className="right">
               {(this.state.user.uid == 0) ?
               (<Link to={"/signup-login"}style={{ textDecoration: 'none' ,color:'white'}}>Signup / Login</Link>)
               :(<span> <span>{this.state.user.username}</span><span onClick={this.changeLogin}>  Logout</span></span>)}
               </div>
            </div>
        );
    }
}