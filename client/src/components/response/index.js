import React, { Component } from 'react';
import './style.css';

export default class Response extends Component {

    render(){
        return(
         
        <form  className="form-container">
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="message" placeholder="Your message"></textarea>
        <button type="submit">Submit</button>
      </form>
      
      )
    }
}