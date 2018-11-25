import React, {Component} from 'react';
import styles from './style.css';
import Card from '../../components/card';
import Content from '../../pages/contentpage'
import { Route, Link } from 'react-router-dom'


export default class CardContainer  extends Component{

    constructor(props){
        super(props)
        this.state={  /* default database information*/
            cardInfo:[],
            card_len:6   /*no. of cards to display default */
        }

        this.showMore=this.showMore.bind(this)
    }

    componentDidMount(){
        fetch('/api/Restaurent/landing')
        .then(res => res.json())
        .then(cardInfo => this.setState({cardInfo},() => console.log(cardInfo)));
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
			var gridItem = <Link key={i} to={"/"+this.state.cardInfo[i].Name}><Card details={this.state.cardInfo[i]} /></Link>
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