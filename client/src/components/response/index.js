import React, { Component } from 'react';
import './style.css';
import { withRouter } from "react-router";

 class Response extends Component {

    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        //var self=this;
        event.preventDefault();
        
        fetch('http://localhost:5000/api/addreview/', {
               method: 'POST',
               datatype:'json',
               headers: {
               'Accept': 'application/json',
               "Content-Type": "application/json"
           },
               body:  JSON.stringify({
                   name: document.getElementById('name').value,
                   title: document.getElementById('title').value,
                   rating: document.getElementById('rating').value,
                   review: document.getElementById('review').value,
                   rid: this.props.rid
               })
           }).then(function(response) {
                 return response.json();
               }).then(function(body) {
                   console.log(body);
               }).catch(function(error) {
                   console.log(error);
               });
               this.props.history.push('/acknowledgment ');
  }
    render(){
        return(
            <div className="response-container">
            <form onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input type="text" id="name" name="name" placeholder="Name" />

              <label>Title</label>
              <input type="text" id="title"name="title" placeholder="Title" />
          
              <label>Rating</label>
              <input type="text" id="rating" name="rating" placeholder="Your rating" />
              
              <label>Your review</label>
              <textarea  name="review" id="review" placeholder="Write something.." style={{height:"200px"}}></textarea>
          
           
              <input type="submit" value="Submit" />
            </form>
          </div>
      )
    }
}
export default withRouter(Response);