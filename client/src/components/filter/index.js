import React, {Component} from 'react';
import styles from './style.css';

class Filter extends Component{
    constructor(props){
        super(props)

        //method binding
        this.selectedList=this.selectedList.bind(this)
        

        this.state={
            selectedItem:this.props.initialItems[0]
        }
    
        this.items=this.props.initialItems.map((item,i)=>(
        <div onClick={() =>this.selectedList(item)}>{item}</div>
    ))
     }

     componentWillMount(){
         document.addEventListener('mousedown',this.handleClick,false)
     }

     componentWillUnmount(){
         document.removeEventListener('mousedown',this.handleClick,false)
     }

     handleClick=(e)=>{
         if(this.node.contains(e.target)){
		       document.getElementsByClassName("dropdown-content")[this.props.id].classList.remove("hidden");
             return
            }
          else{
            document.getElementsByClassName("dropdown-content")[this.props.id].classList.add("hidden");
          }
        }       
     
     selectedList(item){
         this.setState({selectedItem:item})
         document.getElementsByClassName("dropdown-content")[this.props.id].classList.add("hidden");
         
        }

     render(){
     return(
         <div className="dropdown" ref={node => this.node=node}>
                    <div className="dropbtn" >{this.state.selectedItem}</div>
                          <div className={"dropdown-content" + " " + "hidden"}>
                             {this.items}
                           </div>  
         </div>          
     )
    }
}

export default Filter;