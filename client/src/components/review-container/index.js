import React, {Component} from 'react';
import styles from './style.css';
import ReviewCard from '../review-card';


export default class ReviewContainer extends Component{

    constructor(){
        super()
        this.state={info:[{title:"Look ma, a review title!",rating:"4.9",username:"John Green",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam eveniet harum perferendis facere blanditiis molestias sit omnis, fugit, amet enim error eius aperiam dolorum autem nam voluptatibus velit. Inventore!"},
        {title:"Look ma, a review title!",rating:"2.5",username:"John Green",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam eveniet harum perferendis facere blanditiis molestias sit omnis, fugit, amet enim error eius aperiam dolorum autem nam voluptatibus velit. Inventore!"},
        {title:"Look ma, a review title!",rating:"1.2",username:"John Green",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam eveniet harum perferendis facere blanditiis molestias sit omnis, fugit, amet enim error eius aperiam dolorum autem nam voluptatibus velit. Inventore!"},
        {title:"Look ma, a review title!",rating:"3.3",username:"John Green",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam eveniet harum perferendis facere blanditiis molestias sit omnis, fugit, amet enim error eius aperiam dolorum autem nam voluptatibus velit. Inventore!"},
        {title:"Look ma, a review title!",rating:"4.5",username:"John Green",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam eveniet harum perferendis facere blanditiis molestias sit omnis, fugit, amet enim error eius aperiam dolorum autem nam voluptatibus velit. Inventore!"},
        {title:"Look ma, a review title!",rating:"2.2",username:"John Green",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam eveniet harum perferendis facere blanditiis molestias sit omnis, fugit, amet enim error eius aperiam dolorum autem nam voluptatibus velit. Inventore!"}],

        card_len:2
    }
    this.showMore=this.showMore.bind(this)
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
        var grid = []
        for(var i=0 ; i<this.state.card_len ; i++){
			var gridItem = <ReviewCard info={this.state.info[i]}/>
               grid.push(gridItem) 
        }  
        return(
            <div className="review-container">
                   <h1 className="heading">User Review</h1>
                   {grid}
                   { (this.state.card_len!=this.state.info.length)? /*to display button only when der is more item */
                        (<div className="loadMore" onClick={this.showMore} >
                            Load More
                        </div>)
                        :""
                    }
            </div>
          
        )
    }
}