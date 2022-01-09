import React, { Component } from "react";  
import logo from '../../logo.svg';
import "./Header.css";

 

class Header extends Component{
    render(){
        return ( 
            <div>
                <div className="header">
                    <img src={logo} className="header-logo" alt="logo" /> 
                </div>
                <div className="heading-tag">
                            {this.props.heading}
                </div>
            </div>
            
        );
    }
}

export default Header;