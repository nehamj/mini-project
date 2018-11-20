import React, { Component } from 'react';
import Landingimage from '../../components/landing-image'
import FilterContainer from '../../components/filter-container'
import CardContainer from '../../components/card-container'

import './style.css';

export default class HomePage extends Component {

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