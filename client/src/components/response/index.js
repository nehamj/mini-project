import React, { Component } from 'react';
import './style.css';

export default class Response extends Component {

    render(){
        return(
            <div className="response-container">
            <form >
              <label>Title</label>
              <input type="text"  name="title" placeholder="Title" />
          
              <label>Rating</label>
              <input type="text" name="rating" placeholder="Your rating" />
              
              <label>Your review</label>
              <textarea  name="review" placeholder="Write something.." style={{height:"200px"}}></textarea>
          
           
              <input type="submit" value="Submit" />
            </form>
          </div>
      )
    }
}