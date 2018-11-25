import React, {Component} from 'react';
import styles from './style.css';
import CardInfo from '../../components/card-info';
import ReviewContainer from '../../components/review-container';



export default class Content extends Component{
    constructor(){
        super()
        this.state={details:[]}
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        fetch('/api/Restaurent/'+this.props.match.params.restuarent)
        .then(res => res.json())
        .then(details => this.setState({details},() => console.log(details)));
    }

    
    render(){
        var grid = []
        for(var i in this.state.details){
			var gridItem = <CardInfo details={this.state.details[i]} />
               grid.push(gridItem) 
        
        }  
        return(
            <div className="content-container">
                {grid}
                <ReviewContainer />
            </div>
        );
    }
}