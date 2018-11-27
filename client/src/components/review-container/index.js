import React, {Component} from 'react';
import styles from './style.css';
import ReviewCard from '../review-card';
import Response from '../../components/response';


export default class ReviewContainer extends Component{

    constructor(){
        super()
        this.state={info:[],
                    card_len:2
    }
    this.showMore=this.showMore.bind(this)
    }


    componentDidMount(){
        fetch('/api/Restaurent/review/'+this.props.rid)
        .then(res => res.json())
        .then(info => this.setState({info},() => console.log(info)));
    }


    showMore(){        /*to display 6 more cards on click loadmore */
        var len 
        if(this.state.card_len+2 < this.state.info.length)
           len=this.state.card_len+2
        else
            len=this.state.info.length   
        this.setState({
            card_len:len
        })
    }

    render(){
        {console.log("in review"+this.props.rid);}
        var grid = []
        for(var i in this.state.info){
            if(i<this.state.card_len){
			    var gridItem = <ReviewCard info={this.state.info[i]}/>
                grid.push(gridItem) 
            }
        }  
        return(
            <div className="review-container">
                   <h1 className="heading">User Review</h1>
                   {grid}
                   { (this.state.card_len<this.state.info.length) && this.state.info.length !== 0?  /*to display button only when der is more item */
                        (<div className="loadMore" onClick={this.showMore} >
                            Load More
                        </div>)
                        :""
                    }
                    <br />
                    <hr />
                    <br />
                    <h1 className="heading">Enter Your Opinion</h1>
                    <Response rid={this.props.rid} />
            </div>
          
        )
    }
}