import React, {Component} from 'react';
import styles from './style.css';


export default class Card extends Component{

    render(){
        return(
            <div>
            <div className="card">
                <img alt={this.props.details.Name} src={this.props.details.Image}/>
                <div className="card-info">
                    <div className="name">
                        {this.props.details.Name} <br />
                    </div>
                </div>
                <div className="top-right">
                <i class="fa fa-star " aria-hidden="true"></i>  &nbsp;{ this.props.details.Rating}
                </div>
                <div className="gradient-overlay"></div>
            </div>
            </div>
        )
    }
}