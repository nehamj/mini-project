import React, {Component} from 'react';
import styles from './style.css';
import Card from '../../components/card';
import Content from '../../pages/contentpage'
import { Route, Link } from 'react-router-dom'


export default class CardContainer  extends Component{

    constructor(props){
        super(props)
        this.state={  /* default database information*/
            cardInfo:[{img:"http://placeimg.com/640/480/people",descp:"lalaland",name:"random",rating:"4"},
            {img:"http://placeimg.com/640/480/people",descp:"heaven on earth",name:"ikka",rating:"3.5"},
            {img:"http://placeimg.com/640/480/people",descp:"food pallete",name:"ma resturent",rating:"3"},
            {img:"http://placeimg.com/640/480/people",descp:"foody",name:"lorem di",rating:"3.5"},
            {img:"http://placeimg.com/640/480/people",descp:"autentic",name:"kitchen house",rating:"4.5"},
            {img:"http://placeimg.com/640/480/people",descp:"lalaland",name:"random",rating:"1.5"},
            {img:"http://placeimg.com/640/480/people",descp:"heaven on earth",name:"ikka",rating:"4.5"},
            {img:"http://placeimg.com/640/480/people",descp:"food pallete",name:"ma resturent",rating:"4"},
            {img:"http://placeimg.com/640/480/people",descp:"foody",name:"lorem di",rating:"3"},
            {img:"http://placeimg.com/640/480/people",descp:"autentic",name:"kitchen house",rating:"2.3"},
            {img:"http://placeimg.com/640/480/people",descp:"food pallete",name:"ma resturent",rating:"4.3"},
            {img:"http://placeimg.com/640/480/people",descp:"foody",name:"lorem di",rating:"3.6"},
            {img:"http://placeimg.com/640/480/people",descp:"autentic",name:"kitchen house",rating:"4.2"}
        ],
        card_len:6   /*no. of cards to display default */
        }

        this.showMore=this.showMore.bind(this)
    }

    showMore(){        /*to display 6 more cards on click loadmore */
        var len 
        if(this.state.card_len+6 < this.state.cardInfo.length)
           len=this.state.card_len+6
        else
            len=this.state.cardInfo.length   
        this.setState({
            card_len:len
        })
    }

    render(){
        var grid = []
        for(var i=0 ; i<this.state.card_len ; i++){
			var gridItem = <Link key={i} to={"/"+this.state.cardInfo[i].name}><Card details={this.state.cardInfo[i]} /></Link>
               grid.push(gridItem) 
        }  
        return( 
                <div>
                    <div className="card-container">
                        {grid}
                    </div>
                    { (this.state.card_len!=this.state.cardInfo.length)? /*to display button only when der is more item */
                        (<div className="loadMore" onClick={this.showMore} >
                            Load More
                        </div>)
                        :""
                    }
                </div>
        )
    }
}