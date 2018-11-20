import React, { Component } from 'react';
import Filter from '../../components/filter';
import SearchBox from '../../components/search-box';
import './style.css';

export default class FilterContainer extends Component {

    constructor(){
        super();
        this.state={district:[0,1,2,3,4,5],
                    cruisine:[0,6,7],
                    pricing:[0,11,12,13,14]}
    }

    render(){
        return(
            <div className="filter-container">
            <Filter initialItems={this.state.district} id={0}  />
			<Filter initialItems={this.state.cruisine} id={1}  />
            <Filter initialItems={this.state.pricing} id={2}  />
            <SearchBox />

            </div>
        );
    }
}