import React, { Component } from 'react';
import './style.css';

export default class CardInfo extends Component {

    constructor(){
        super()
        this.CardInfo=[
            {img:"http://placeimg.com/640/480/people",name:"random",rating:"4",location:"hello world la la la la la ....",timing:"10:00pm-11:00am",crusine:"chinese",price:"200 rs"},
            {img:"http://placeimg.com/640/480/people",name:"ikka",rating:"3.5",location:"hello world la la la la la ....",timing:"10:00pm-11:00am",crusine:"chinese",price:"200 rs"},
            {img:"http://placeimg.com/640/480/people",name:"ma resturent",rating:"3",location:"hello world la la la la la ....",timing:"10:00pm-11:00am",crusine:"chinese",price:"200 rs"},
            {img:"http://placeimg.com/640/480/people",name:"lorem di",rating:"3.5",location:"hello world la la la la la ....",timing:"10:00pm-11:00am",crusine:"chinese",price:"200 rs"},
            {img:"http://placeimg.com/640/480/people",name:"kitchen house",rating:"4.5",location:"hello world la la la la la ....",timing:"10:00pm-11:00am",crusine:"chinese",price:"200 rs"}
            ]
        this.state={details:[]}
    }

    componentDidMount(){
        console.log("this is "+this.props.restaurentName)
        for(var i=0;i<this.CardInfo.length;i++)
        {
            if(this.CardInfo[i].name === this.props.restaurentName)
                {
                    this.setState({details : this.CardInfo[i]});
                    break;
                }
        }
    }

    render(){
        return(
            <div className="info-container">
                <div className="image">
                <img alt={this.state.details.name} src={this.state.details.img}/>
                </div>
                <div className="info">
                        <h1>{this.state.details.name}</h1>
                        <div className="star"><i class="fa fa-star " aria-hidden="true"></i>  &nbsp;{ this.state.details.rating}</div><br />
                        <span className="label">LOCATION:</span><span className="details">{this.state.details.location}</span>
                        <br /><br/>
                        <span className="label">CRUSINE:</span><span className="details">{this.state.details.crusine}</span>
                        <br /><br />
                        <span className="label">TIMING:</span><span className="details">{this.state.details.timing}</span><br /><br />
                        <span className="label">PRICE:</span><span className="details">{this.state.details.price}</span>  <br /><br />


                </div>
            </div>
        );
    }
}