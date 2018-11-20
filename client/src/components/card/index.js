import React, {Component} from 'react';
import styles from './style.css';


export default class Card extends Component{

    render(){
        return(
            <div>
            <div className="card">
                <img alt={this.props.details.name} src={this.props.details.img}/>
                <div className="card-info">
                    <div className="name">
                        {this.props.details.name} <br />
                    </div>
                    {this.props.details.descp}  <br />
                </div>
                <div className="top-right">
                <i class="fa fa-star " aria-hidden="true"></i>  &nbsp;{ this.props.details.rating}
                </div>
                <div className="gradient-overlay"></div>
            </div>
            </div>
        )
    }
}