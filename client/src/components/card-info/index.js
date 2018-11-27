import React, { Component } from 'react';
import './style.css';

export default class CardInfo extends Component {



    render(){
        return(
            <div className="info-container">
                <div className="image">
                <img alt={this.props.details.Name} src={this.props.details.Image}/>
                </div>
                <div className="info">
                        <h1>{this.props.details.Name}</h1>
                        <div className="star"><i class="fa fa-star " aria-hidden="true"></i>  &nbsp;{ this.props.details.Rating}</div><br />
                        <span className="label">LOCATION: </span><span className="details">{this.props.details.Location}</span>
                        <br /><br/>
                        <span className="label">CRUSINE: </span><span className="details">{this.props.details.Cuisines}</span>
                        <br /><br />
                        <span className="label">TIMING: </span><span className="details">{this.props.details.Timing}</span><br /><br />
                        <span className="label">PRICE FOR TWO: </span><span className="details">{this.props.details.Pricefortwo}</span>  <br /><br />


                </div>
            </div>
        );
    }
}