import React, {Component} from 'react';
import styles from './style.css';


export default class SignLogin extends Component{


    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
            <div className="sign-container">
            <div className="login-wrap">
	            <div className="login-html">
		            <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab" style={{ cursor:'pointer'}}>Sign In</label>
		            <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab" style={{ cursor:'pointer'}}>Sign Up</label>
		        <div className="login-form">
			<div className="sign-in-htm">
			<br/>
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" />
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" />
				</div>
				<div className="group"><br />
					<input type="submit" className="button" value="Sign In" />
				</div>
				<div className="hr"></div>
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<input id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<input type="submit" class="button" value="Sign Up"/>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
        );
    }
}