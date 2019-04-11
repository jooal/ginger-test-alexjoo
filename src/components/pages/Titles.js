import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../App.css";


class Titles extends Component {
    render() {
        return (
            <div className="home-body">
                <header className="header">
                  
                
                        <h1 href="https://www.ginger.io/" className="title">Ginger.io</h1>
                        <img src={require("../../assets/book.gif")} className="logo"></img>

                    
                    <h4 className="intro">Discover recent articles about the mental health industry. </h4>
                </header>
            </div>


        )
    }
}

export default Titles