import React, { Component } from 'react';
import './style.css';

export default class SearchBox extends Component {

    render(){
        return(
            <div className="wrap">
                <div className="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        );
    }
}