import React, { Component } from 'react';
import Landingimage from '../../components/landing-image'
import Filter from '../../components/filter'
import SearchBox from '../../components/search-box'
import CardContainer from '../../components/card-container'

import './style.css';

export default class HomePage extends Component {

    constructor(){
        super();
        this.state={district:[0,1,2,3,4,5],
                    cruisine:[0,6,7],
                    pricing:[0,11,12,13,14]}
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div>
               <Landingimage />
               <div className="filter-container">
                    <Filter initialItems={this.state.district} id={0}  />
			        <Filter initialItems={this.state.cruisine} id={1}  />
                    <Filter initialItems={this.state.pricing} id={2}  />
                    <SearchBox />

                </div>
               <CardContainer />
               
            </div>
        );
    }
}