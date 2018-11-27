import React, { Component } from 'react';
import './style.css';

export default class SearchBox extends Component {

    constructor(){
        super();

        this.search=this.search.bind(this)
    }
    search(){
       var item=document.getElementsByClassName('searchTerm')[0].value;
       this.props.searchList(item);
       console.log(item);
    }

    render(){
        return(
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" className="searchButton" onClick={this.search}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        );
    }
}