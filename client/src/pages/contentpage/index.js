import React, {Component} from 'react';
import styles from './style.css';
import CardInfo from '../../components/card-info';
import ReviewContainer from '../../components/review-container';



export default class Content extends Component{


    componentDidMount(){
        window.scrollTo(0, 0)
        console.log("first:"+this.props.match.params.restuarent)
    }
    
    render(){
        return(
            <div className="content-container">
                <CardInfo restaurentName={this.props.match.params.restuarent} />
                <ReviewContainer />
            </div>
        );
    }
}