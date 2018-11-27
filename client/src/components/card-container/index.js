import React, {Component} from 'react';
import styles from './style.css';
import Card from '../../components/card';
import Content from '../../pages/contentpage'
import Filter from '../../components/filter'
import SearchBox from '../../components/search-box'
import { Route, Link } from 'react-router-dom'


export default class CardContainer  extends Component{

    constructor(props){
        super(props)
        this.state={  /* default database information*/
            cardInfo:[],
            currentOption:["District","Cuisines"],
            searchName:"",
            card_len:6   /*no. of cards to display default */
        }

        this.District=["District","Alappuzha","Ernakulam","Thiruvananthapuram"]
        this.Cuisines=["Cuisines","Arabian","Chinese","Indian","Italian","Keralan","Sea Food","South Indian","Vegeterian"]

        this.showMore=this.showMore.bind(this)
        this.listContains=this.listContains.bind(this)
        this.filterList=this.filterList.bind(this)
        this.searchList=this.searchList.bind(this)
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

    filterList(item,index){  
		let temp=this.state.currentOption.slice()
		temp[index]=item
         this.setState({currentOption : temp})
         this.setState({searchName:""})		
    }

    searchList(item){
         this.setState({searchName :item})
    }

    
    listContains(index){
		if(this.state.currentOption[0]==="District"){
			if(this.state.cardInfo[index].Cuisines === this.state.currentOption[1] || this.state.currentOption[1]==="Cuisines")
				   return true	   
		}
		
		if(this.state.currentOption[1]==="Cuisines"){
			if(this.state.cardInfo[index].District === this.state.currentOption[0])
				   return true	   
		}
		if(this.state.cardInfo[index].District === this.state.currentOption[0] && this.state.cardInfo[index].Cuisines === this.state.currentOption[1]){
			return true
		}

         return false
    }
    
    render(){
        console.log("name:"+this.state.searchName)
        var grid = []
        var count=0; 
        var totalcount=0;
        for(var i in this.state.cardInfo){
            if(this.state.searchName != ""){
                if(this.state.cardInfo[i].Name.toLowerCase() === this.state.searchName.toLowerCase()){
                    var gridItem = <Link key={i} to={"/"+this.state.cardInfo[i].RID}><Card details={this.state.cardInfo[i]} /></Link>
                    grid.push(gridItem) 
                }
            }
            else {
            if(this.listContains(i)){
               if(count<this.state.card_len){
			        var gridItem = <Link key={i} to={"/"+this.state.cardInfo[i].RID}><Card details={this.state.cardInfo[i]} /></Link>
                    grid.push(gridItem) 
                    count++;
            }
            totalcount++;
         }
        }
        }  
        return( 
                <div>
                    <div className="filter-container">
                    <Filter initialItems={this.District} id={0} filterList={this.filterList} />
			        <Filter initialItems={this.Cuisines} id={1} filterList={this.filterList} />
                    <SearchBox searchList={this.searchList} />

                </div>
                    <div className="card-container">
                    {grid}
                    </div>
                    { (count != totalcount)? /*to display button only when der is more item */
                        (<div className="loadMore" onClick={this.showMore} >
                            Load More
                        </div>)
                       :""
                    }
                </div>
        )
    }
}