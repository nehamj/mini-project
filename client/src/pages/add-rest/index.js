import React, {Component} from 'react';
import styles from './style.css';


export default class AddRestuarent extends Component{

    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        //var self=this;
        event.preventDefault();
        
        fetch('http://localhost:5000/api/addrestaurant/', {
               method: 'POST',
               datatype:'json',
               headers: {
               'Accept': 'application/json',
               "Content-Type": "application/json"
           },
               body:  JSON.stringify({
                   rname: document.getElementById('rname').value,
                   location: document.getElementById('location').value,
                   district: document.getElementById('district').value,
                   image: document.getElementById('image').value,
                   cuisines: document.getElementById('cuisines').value,
                   price_for_two: document.getElementById('price_for_two').value,
                   timing: document.getElementById('timing').value,
                   rating: document.getElementById('rating').value,
                   rating_no: document.getElementById('rating_no').value
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
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="content-container">
        <div className="add-main-container">
        <div className="add-container">
           <h1>Enter Restaurant Details:</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input type="text" id="rname" name="rname" placeholder="Name of restaurant" />

              <label>Location</label>
              <input type="text" id="location"name="location" placeholder="Location" />
          
              <label>District</label>
              <input type="text" id="district" name="district" placeholder="District" />

              <label>Image link</label>
              <input type="text" id="image" name="image" placeholder="Image link" />
              
              <label>Cuisines</label>
              <input type="text" id="cuisines" name="cuisines" placeholder="Cuisines" />
          
              <label>Price for two</label>
              <input type="text" id="price_for_two" name="price for two" placeholder="Price for two" />
           
              <label>Timing</label>
              <input type="text" id="timing" name="timing" placeholder="Timing" />

              <label>Rating</label>
              <input type="text" id="rating" name="rating" placeholder="Rating" />

              <label>Total number rating"</label>
              <input type="text" id="rating_no" name="rno." placeholder="Total no. rating" />

              <input type="submit" value="Submit" />
            </form>

        </div>
        </div>
        </div>
        )

    }
}