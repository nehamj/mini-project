import React, { Component } from 'react';
import Landingimage from '../../components/landing-image'
import FilterContainer from '../../components/filter-container'
import CardContainer from '../../components/card-container'

import './style.css';

export default class HomePage extends Component {

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div>
               <Landingimage />
               <FilterContainer />
               <CardContainer />
               
            </div>
        );
    }
}