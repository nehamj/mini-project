import React, {Component} from 'react';
import styles from './style.scss';


export default class ReviewCard extends Component{


    render(){
        return(
            <div className="review">
            <h4 className="review__title">{this.props.info.Title}</h4>
            <div className="review__score">
              <span className="score" >{this.props.info.Rating}</span>
              <span>&nbsp;/&nbsp;5&nbsp;</span>
              <span className="star-ratings-css">
              <span className="star-ratings-css-top" style={{width: this.props.info.Rating*20}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></span>
              <span className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></span>
              </span>
            </div>
            <div className="review__text">"{this.props.info.Review}<i></i>" – <small>{this.props.info.UserID}</small></div>
          </div>
          
          
        )
    }
}
