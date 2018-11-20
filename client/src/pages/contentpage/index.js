import React, {Component} from 'react';
import styles from './style.css';


export default class Content extends Component{


    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="content-container">
            </div>
        );
    }
}